<script>
    export let name;
    export let price;
    export let subscriptionBilling;
    export let description = "";

    import Actions from "$lib/subscriptionactions.svelte";
</script>

<style>


</style>

<div>
    <h1>{name}</h1>
    <h1>{price}/{subscriptionBilling}</h1>
    <p>{description}</p>
</div>