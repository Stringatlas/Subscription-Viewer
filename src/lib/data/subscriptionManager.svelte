<script context="module">

</script>


<script>
    import {Subscription} from "$lib/subscriptions.js";
    import { billingPlansIncrement, billingPlans, currencies, subscriptions, howToDisplayCost, defaultCurrency, currentAvailableID} from "$lib/data/localStore.js";
    
    var subscriptionType = $billingPlans[0];

    $: convertedSubscriptions = convertSubscriptions($subscriptions);
    let totalCost = 0;
    function convertSubscriptions(subscriptions) {
        let _convertedSubscriptions = [];

        for (let subscription of subscriptions) {
            _convertedSubscriptions.push(new Subscription(subscription.id, subscription.name, subscription.price, subscription.currency,
            subscription.billing, subscription.description, subscription.link, 
            subscription.image));
        }

        return _convertedSubscriptions;
    }
    let costs = {};
    let displayCosts = [];
    let subscriptionObjects = [];

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
        subscription.currency = $defaultCurrency;
        subscription.id = $currentAvailableID
        $currentAvailableID = $currentAvailableID + 1;

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