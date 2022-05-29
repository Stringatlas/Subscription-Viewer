<script>
    import { billingPlans, currencies, subscriptions} from "$lib/data/settingsData.js";

</script>


{#each $subscriptions as subscription}
    <div>
        <p>Name: </p>
        <input type="text" bind:value={subscription.name}>
    </div>
{/each}