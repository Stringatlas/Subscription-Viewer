<script>
    import { billingPlans, currencies, subscriptions} from "$lib/data/settingsData.js";
    import DropDown from "$lib/dropdown.svelte";

</script>

<style lang=scss>
    $element-margin-sides: 1.5vw;

    .inline-block {
        display: inline-block;
    }

    .subscription-section {
        width: calc(100% - $element-margin-sides * 2);

        margin-bottom: 3vh;
        margin-left: $element-margin-sides;
        margin-right: $element-margin-sides;
        margin-top: 1vh;

        border-width: 10vmin;
        border-color: red;
        background-color: rgb(175, 187, 196)
    }

    p {
        font-size: 2vmin;
    }

    .billing-section :global(.drop-down){
        display: inline-block;
    }

    input {
        font-size: 2vmin;
    }

    .element-section {
        margin-left: 2vmin;
    }
</style>

{#if $subscriptions instanceof Array }
    {#each $subscriptions as subscription}
        <div class="subscription-section">
            <div class="element-section name-section">
                <p class="inline-block">Name: </p>
                <input class="inline-block" type="text" bind:value={subscription.name}>
            </div>
        
            <div class="element-section">
                <p class="inline-block">Cost: </p>
                <input class="inline-block" type="text" bind:value={subscription.price}>
            </div>

            <div class="element-section">
                <p class="inline-block">Description: </p>
                <textarea class="inline-block" type="text" bind:value={subscription.description}></textarea>
            </div>

            <div class="element-section">
                <p class="inline-block">Link: </p>
                <input class="inline-block" type="text" bind:value={subscription.link}>
            </div>

            <div class="billing-section element-section">
                <p class="inline-block">Billing: </p>
                <div class="inline-block">
                    <DropDown class="drop-down" items={$billingPlans} bind:value={subscription.billing} fontSize="1.5vmin"/>
                </div>
            </div>

            <div class="currency-section element-section">
                <p class="inline-block">Currency: </p>
                <div class="inline-block">
                    <DropDown class="drop-down" items={$currencies} bind:value={subscription.currency} fontSize="1.5vmin"/>
                </div>
            </div>
            
            <div class="element-section">
                <p class="inline-block">Image: </p>
                <div class="mb-3">
                    <input class="form-control form-control-sm" id="formFileSm" type="file">
                </div>
            </div>
        </div>

    {/each}
{/if}