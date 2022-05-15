<script context="module">

</script>

<script>
    import SubscriptionCard from "$lib/subscription.svelte";
    import DropDown from "$lib/dropdown.svelte";
    import SubscriptionEditCard from "$lib/subscriptionedit.svelte";

    import {Subscription} from "$lib/subscriptions.js";

    import { billingPlans, currencies, subscriptions} from "$lib/data/settingsData.js";
    
    let subscriptionType;

    let prices = [14.99, 60, 9.99]

    let price = 9.99;
    $: displayPrice = price.toFixed(2);
    let totalCost = 0;

    $: convertedSubscriptions = convertSubscriptions($subscriptions);

    function convertSubscriptions(subscriptions) {
        let _convertedSubscriptions = [];

        for (let subscription of subscriptions) {
            _convertedSubscriptions.push(new Subscription(subscription.name, subscription.price, 
            subscription.billing, subscription.description, subscription.link, 
            subscription.image));
        }

        return _convertedSubscriptions;
    }
    function CalculatePrices() {

    }

    function createSubscription() {
        var subscription = new Subscription();
        $subscriptions = [...$subscriptions, subscription];
        console.log("Create Subscription");
    }
    // subscription = {"name": "Amazon Prime"}
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
    h1 {
        font-size: 6vw;
    }
</style>

<div class="topBar">
    <div class="flex-row">
        <h1 style="margin:0.5em">Total cost: ${totalCost}</h1>
        <DropDown bind:value={subscriptionType} items={$billingPlans} />
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

