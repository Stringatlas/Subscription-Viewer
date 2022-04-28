<script>
    import Subscription from "$lib/subscription.svelte";
    let price = 9.99;
    $: displayPrice = price.toFixed(2);
</script>

<style>
    .subscriptions {
        flex-direction: column;
    }

    body {
        background-color: rgb(132, 143, 152);
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

</style>
<svg class="add-subscription-btn bi bi-plus" xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>

<body>
    <div class="row subscriptions">
        <Subscription name={"Netflix"} price="$9.99" subscriptionPlan="month"/>
        <Subscription name={"Netflix"} price="$9.99" subscriptionPlan="month"/>
        <Subscription name={"Netflix"} price="$9.99" subscriptionPlan="month" 
        description="Hello this is a subscription"
        />
    </div>
</body>


