<script>
    import { billingPlans, currencies, subscriptions, defaultCurrency, currentAvailableID} from "$lib/data/localStore.js";
    import DropDown from "$lib/components/dropdown.svelte";
    import { onMount } from "svelte";
    import { browser } from "$app/env";
    import { Subscription } from "$lib/subscriptions.js";
    import { AccessDB, storeImage,  getImage, getAllImages }from "$lib/data/localIndexedDB.js";
    
    onMount(() => {
		GetImagesIndexedDB();
	});

    let fileInput;
    let showImage = false;
    let subscriptionObjects = [];

    let dbObject = {"value": []};

    $: dbImages = onDBChange(dbObject);
    let images = {};

    function onDBChange(object) {
        $subscriptions = $subscriptions;
        dbObject.value = object.value;
        return object.value;
    }

    async function GetImagesIndexedDB() {
        if (browser) {
            let ids = [];
            for (let i=0; i < $subscriptions.length; i++) {
                ids.push($subscriptions[i].id);
            }
            images = await getAllImages(ids);
            console.log("IMAGESS", JSON.stringify(images));
        }
        else {
            console.log("IN SSR");
        }

        
    }

    function DeleteSubscription(index) {
        $subscriptions.splice(index, 1);
        $subscriptions = $subscriptions;
    }

    function _createSubscription() {
        var subscription = new Subscription();
        subscription.currency = $defaultCurrency;
        subscription.id = $currentAvailableID
        $currentAvailableID = $currentAvailableID + 1;

        $subscriptions = [...$subscriptions, subscription];

        if (subscriptionObjects.length > 0) {
            let obj = subscriptionObjects[subscriptionObjects.length - 1];
            obj.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    function StoreImage(id) {
        GetImagesIndexedDB();
        $subscriptions = $subscriptions;
    }

    function UploadImage(e, id) {
		const file = e.target.files[0];

        if (file) {
            showImage = true;

            const reader = new FileReader();

            reader.addEventListener("load", function () {
                const imagePreview = e.target.nextElementSibling;
                imagePreview.setAttribute("src", reader.result);

                storeImage(id, reader.result);
            });
        
            reader.readAsDataURL(file); 
            
            return;
        } 

        showImage = false; 
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

    .image-preview {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    }
</style>

<svg class="add-subscription-btn bi bi-plus" type="button" xmlns="http://www.w3.org/2000/svg" 
height="7vmin" width="7vmin" fill="currentColor" viewBox="0 0 16 16" on:click={_createSubscription}>
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>

{#if $subscriptions instanceof Array }
    {#each $subscriptions as subscription, i}
        <div class="subscription-section inline-block" bind:this={subscriptionObjects[i]}>
            <div class="">
                <div class="element-section name-section">
                    <p class="inline-block">Name: </p>
                    <input class="inline-block" type="text" bind:value={subscription.name}>
                </div>
            
                <div class="element-section">
                    <p class="inline-block">Cost: </p>
                    <input class="inline-block" type="text" value={String(subscription.price).replace(/[^\d.]/g, '')} on:input={(e) => {
                        subscription.price = String(e.target.value).replace(/[^\d.]/g, '');
                        console.log(typeof(subscription.price));
                        }}>
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
                        <DropDown items={$billingPlans} bind:value={subscription.billing} fontSize="1.5vmin"/>
                    </div>
                </div>
    
                <div class="currency-section element-section">
                    <p class="inline-block">Currency: </p>
                    <div class="inline-block">
                        <DropDown items={$currencies} bind:value={subscription.currency} fontSize="1.5vmin"/>
                    </div>
                </div>
                
                <div class="element-section">
                    <p class="inline-block">Image: </p>
                    <div class="mb-3">
                        <!-- svelte-ignore missing-declaration -->
                        <input class="form-control form-control-sm" type="file" accept="image/*" on:change={() => UploadImage(event, subscription.id)} bind:this={fileInput}>
                        {#if (console.log("IMAGE VALUE", images[subscription.id]) || true)}
                            <img class="image-preview" src={images[subscription.id]} alt="Image Loading">
                        {:else}
                            <span>No Image Uploaded</span>
                        {/if}
                    </div>
                </div>
                 

            </div>
            <div class="">
                <button class="btn btn-danger btn-settings inline-block" on:click={() => {DeleteSubscription(i)} }>
                    Delete Subscription
                </button>
            </div>
        </div>
        
        {#if (i == subscriptionObjects.length - 1)}
            {#if (subscriptionObjects[subscriptionObjects.length - 1].scrollIntoView({behavior:'smooth'}))}
                <span hidden></span>
            {/if}
        {/if}
    {/each}
{/if}
