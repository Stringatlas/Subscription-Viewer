<script>
    import Navbar from "$lib/navbar.svelte";
    import Subscription from "$lib/subscription.svelte";
</script>
<Navbar />

<style>
    .subscriptions {
        flex-direction: column;
    }

    body {
        background-color: rgb(132, 143, 152);
    }
</style>
<body>
    <div class="row subscriptions">
        <Subscription name={"Netflix"} price="$9.99" subscriptionPlan="month"/>
        <Subscription name={"Netflix"} price="$9.99" subscriptionPlan="month"/>
        <Subscription name={"Netflix"} price="$9.99" subscriptionPlan="month" 
        description="Hello this is a subscription"
        />
    </div>
</body>


