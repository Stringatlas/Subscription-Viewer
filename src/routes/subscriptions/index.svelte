<script>
    import Subscription from "$lib/subscription.svelte";
    import BillingDropDown from "$lib/changeBillingDropdown.svelte";

    let price = 9.99;
    $: displayPrice = price.toFixed(2);
    let totalCost = 0;

    let description="Netflix is a subscription-based streaming service that allows our members to watch TV shows and movies without commercials on an internet-connected device. You can also download TV shows and movies to your iOS, Android, or Windows 10 device and watch without an internet connection."
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

        border-style: solid;
        border-color: #beb0a8;
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
        <BillingDropDown class="billing-dropdown" style="margin:10px"/>
    </div>
    
    <svg class="add-subscription-btn bi bi-plus" type="button" xmlns="http://www.w3.org/2000/svg" height="12.5vmin" width="12.5vmin" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
    </svg>
</div>


<body>
    <div class="flexer">
        <Subscription name={"Amazon Prime"} price="14.99" subscriptionBilling="month" image="/prime.png"/>
        <Subscription name={"Costco Member"} price="60" subscriptionBilling="year" image="/costco.png"/>
        <Subscription name={"Netflix"} price="9.99" subscriptionBilling="month" description="{description}" image="/netflix.png"/>
    </div>
</body>

