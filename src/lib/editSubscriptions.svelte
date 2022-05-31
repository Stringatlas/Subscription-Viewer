<script>
    import { billingPlans, currencies, subscriptions} from "$lib/data/settingsData.js";
    import DropDown from "$lib/dropdown.svelte";
    import { onMount } from "svelte";
    import { browser } from "$app/env"
    import { Subscription } from "$lib/subscriptions.js";

    function DeleteSubscription(index) {
        $subscriptions.splice(index, 1);
        $subscriptions = $subscriptions;
    }

    onMount(() => {
        if (browser) {
            var reader = new FileReader();
        }

    });

    function createSubscription() {
        var subscription = new Subscription();
        $subscriptions = [...$subscriptions, subscription];
    }

</script>

<style lang=scss>
    $element-margin-sides: 1.5vw;
    $add-subscription-transition-time: 0.25s;
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

</style>

<svg class="add-subscription-btn bi bi-plus" type="button" xmlns="http://www.w3.org/2000/svg" 
height="7vmin" width="7vmin" fill="currentColor" viewBox="0 0 16 16" on:click={createSubscription}>
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>

{#if $subscriptions instanceof Array }
    {#each $subscriptions as subscription, i}
        <div class="subscription-section inline-block">
            <div class="">
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
            <div class="">
                <button class="btn btn-danger btn-settings inline-block" on:click={() => {DeleteSubscription(i)} }>
                    Delete Subscription
                </button>
            </div>
        </div>

    {/each}
{/if}