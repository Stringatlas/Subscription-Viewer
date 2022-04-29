<script>
    import Subscription from "$lib/subscription.svelte";
    import BillingDropDown from "$lib/changeBillingDropdown.svelte";

    let price = 9.99;
    $: displayPrice = price.toFixed(2);
    let totalCost;

    subscription = {"name": "Amazon Prime"}
</script>

<style>
    body {
        background-color: rgb(142, 154, 164);
    }
    .subscriptions {
        flex-direction: column;
    }

    .add-subscription-btn {
        background-color: rgb(41, 75, 208);
        border-radius: 50%;
        text-align: center;
        color: rgb(218, 213, 198);
    }

    .add-subscription-btn:hover {
        background-color: rgb(23, 51, 162);
    }

    .topBar {
        margin-top: 10px;
        margin-left: 1.1rem;
        margin-right: 1.1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .topBarElement {
        /* background-color: red; */
        display: inline-flex;
    }
</style>

<div class="topBar">
    <h1 class="topBarElement">Total cost: ${totalCost}</h1>
    <BillingDropDown class="topBarElement"/>
    
    <svg class="topBarElement add-subscription-btn bi bi-plus" xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
    </svg>
</div>


<body>
    <div class="row subscriptions">
        <Subscription name={"Amazon Prime"} price="$14.99" subscriptionBilling="month"/>
        <Subscription name={"Costco Member"} price="$60" subscriptionBilling="year"/>
        <Subscription name={"Netflix"} price="$9.99" subscriptionBilling="month" description="Hello this is a subscription"/>
    </div>
</body>


