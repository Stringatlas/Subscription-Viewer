<script context="module">

</script>

<script>
    import SubscriptionCard from "$lib/subscription.svelte";
    import DropDown from "$lib/dropdown.svelte";
    import SubscriptionEditCard from "$lib/subscriptionedit.svelte";
    import { onMount } from "svelte";
    import {Subscription} from "$lib/subscriptions.js";

    import { billingPlansIncrement, billingPlans, currencies, subscriptions, howToDisplayCost, defaultCurrency} from "$lib/data/settingsData.js";
    
    var subscriptionType = $billingPlans[0];

    $: convertedSubscriptions = convertSubscriptions($subscriptions);
    let totalCost = 0;
    function convertSubscriptions(subscriptions) {
        let _convertedSubscriptions = [];

        for (let subscription of subscriptions) {
            _convertedSubscriptions.push(new Subscription(subscription.name, subscription.price, subscription.currency,
            subscription.billing, subscription.description, subscription.link, 
            subscription.image));
        }

        return _convertedSubscriptions;
    }
    let costs = {};
    let displayCosts = [];
    // $: displayPrice = totalCost.toFixed(2);

    let displayPrice = 0;

    function CalculatePrices() {
        if ($howToDisplayCost == "Separate") {
            CalculatePricesSeparately();
            return 0;
        }

        CalculatePricesAverage();
    }
    function CalculatePricesAverage() {
        var tempBillingPlans = $billingPlans;
        tempBillingPlans = lowerCase(tempBillingPlans);
        console.log(tempBillingPlans);
        let targetBillingPlanIndex = tempBillingPlans.indexOf(subscriptionType.toLowerCase());
        totalCost = 0;

        for (let subscription of $subscriptions) {
            let billingPlan = subscription.billing;
            let billingPlanIndex  = tempBillingPlans.indexOf(billingPlan.toLowerCase());
            
            var fromIndex = Math.min(targetBillingPlanIndex, billingPlanIndex);
            var toIndex = Math.max(targetBillingPlanIndex, billingPlanIndex);

            var multiplier = 1;

            for (let i = fromIndex; i < toIndex; i++) {
                multiplier *= parseFloat($billingPlansIncrement[i]);
            }

            if (targetBillingPlanIndex < billingPlanIndex) {
                totalCost += subscription.price / multiplier;
            }
            else
            {
                totalCost += subscription.price * multiplier;
            }   
        }
        costs = {};
        displayPrice = totalCost.toFixed(2);
    }

    function CalculatePricesSeparately() {
        displayCosts = []
        costs = {};
        totalCost = 0;

        for (let subscription of $subscriptions) {
            let billingPlan = subscription.billing;

            if (billingPlan in costs){
                costs[billingPlan] += parseFloat(subscription.price);
            } else {
                costs[billingPlan] = parseFloat(subscription.price);
            }

            totalCost += subscription.price;
        }
        displayPrice = totalCost.toFixed(2);

        for (let key in costs){
            if (costs.hasOwnProperty(key)) {
                displayCosts.push(`${$defaultCurrency[0]}${costs[key].toFixed(2)}/${key}`);
            }
        }
    }

    function createSubscription() {
        var subscription = new Subscription();
        $subscriptions = [...$subscriptions, subscription];
        CalculatePrices();
    }

    function lowerCase(array) {
        for (let i=0; i<array.length; i++) {
            array[i] = array[i].toLowerCase();
        }

        return array;
    }
    CalculatePrices();
</script>

<style lang=scss>
    .flexer {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex-wrap: nowrap;
        flex: 1;
    }

    body {
        background-color: rgb(142, 154, 164);
    }

    $add-subscription-transition-time: 0.2s;

    .add-subscription-btn {
        background-color: rgba($color: #8A5E44, $alpha: 1);
        border-radius: 50%;
        text-align: center;
        color: #beb0a8;
        transition: background-color $add-subscription-transition-time;

        // border-style: solid;
        // border-color: #beb0a8;
    }

    .add-subscription-btn:hover {
        background-color: rgba($color: #BA7C59, $alpha: 1);
        transition: background-color $add-subscription-transition-time;
    }

    .add-subscription-btn:focus {
        outline-style: solid;
        border-style: solid;
        border-color: #beb0a8;
    }

    .topBar {
        margin-top: 10px;
        margin-left: 1%;
        margin-right: 1%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    .flex-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    }

    .flex-column {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
    h1 {
        font-size: 6vw;
    }
</style>

<div class="topBar">
    {#if $howToDisplayCost == "Average"}
        <div class="flex-row">
            <h1 style="margin:0.5em">Total cost: {$defaultCurrency[0]}{displayPrice}</h1>
            <DropDown bind:value={subscriptionType} items={$billingPlans} onChange={CalculatePrices}/>
        </div>
    {/if}
    <div class="flex-column">
        {#if $howToDisplayCost == "Separate"}
            {#each displayCosts as displayCost}
                <h1>{displayCost}</h1>
            {/each}
        {/if}
    </div>

    <svg class="add-subscription-btn bi bi-plus" type="button" xmlns="http://www.w3.org/2000/svg" 
    height="12.5vmin" width="12.5vmin" fill="currentColor" viewBox="0 0 16 16" on:click={createSubscription}>
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
    </svg>
</div>



<body>
    <div class="flexer">
        <!-- <SubscriptionEditCard subscription={convertSubscriptions[0]}/> -->
        {#each convertedSubscriptions as subscription}
            <SubscriptionCard bind:subscription={subscription} />
        {/each}
    </div>
</body>

