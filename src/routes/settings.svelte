<script>
    import DropDown from "$lib/dropdown.svelte";
    import { onMount } from "svelte";
    import { howToDisplayCost, billingPlans, billingPlansIncrement, currencies} from "$lib/data/settingsData.js";
    export let currency = "$ Dollar";

    import { settings } from "$lib/data/default.json";
    
    function addNewBillingPlan () {
		$billingPlans = [...$billingPlans, "New billing plan"];
        $billingPlansIncrement = [...$billingPlansIncrement, 1];
	}
	function deleteLastBillingPlan () {
		$billingPlans = $billingPlans.slice(0, -1);
	}

    function addNewCurrency () {
		$currencies = [...$currencies, "! New Currency"];
	}

	function deleteLastCurrency () {
		$currencies = $currencies.slice(0, -1);
	}

    function changeCurrency(change_currency){
        currency = change_currency;
    }

    function createDropDownOptions() {

    }

    function resetSettingsToDefault() {
        $billingPlans = settings.billingPlans;
        $currencies = settings.currencies;
        $billingPlansIncrement = settings.billingPlansIncrement;
    }

</script>
<p>{JSON.stringify($billingPlans)}</p>
<p>{JSON.stringify($currencies)}</p>

<style lang=scss>
    $side-margin: 1.5vmin;

    .inline-block {
        display: inline-block;
    }

    .settings-section {
        margin: $side-margin;
        margin-top: calc(2 * $side-margin);
    }

    .title {
        margin-top: 2vmin;
    }

    .form-check {
        margin-left: 2vmin;
    }

    .form-check-label {
        font-size: 2.5vmin;
    }
    
    h1 {
        margin-top: 1vmin;
    }

    button {
        margin-left: 1vmin;
    }

    .billing-plan-input {
        display: block;
        margin-top: 1vmin;
    }
    .currency-input {
        display: block;
        margin-top: 1vmin;
    }

    #btn-save-settings {
        font-size: 3vmin;
        padding: 1vmin;
    }

    .btn-settings {
        font-size: 2vmin;
        padding: 0.6vmin;
    }

    .highlight {
        background-color: red;
    }

    .radio-element {
        margin-right: 10vmin;
    }

    .inline-flexer {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .row-flexer {
        display: flex;
        flex-direction: row;
    }

    .outline-black {
        text-shadow:
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000; 
    }
</style>

<div class="title">
    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
    </svg> -->
    <h1 class="text-center">Settings</h1>
</div>


<div class="settings-section">
    <h1 class="inline-block">
        Currency:  
    </h1>
    <div class="inline-block">
        <DropDown items={$currencies} fontSize="1.75vmin"/>
    </div>
</div>

<div class="settings-section">
    <h1 class="inline-block">Currencies</h1>
    <button class="btn btn-success btn-settings inline-block" on:click={addNewCurrency}>Add New Currency</button>
    <button class="btn btn-danger btn-settings inline-block" on:click={deleteLastCurrency}>Delete Last Currency</button>

    {#each $currencies as currency}
        <input class="currency-input" type="text" bind:value={currency}>
    {/each}
</div>

<div class="settings-section">
    <h1>Display Costs</h1>
    <h5>(Used in Analytics and Total costs display)</h5>
    
    <div class="form-check inline-block radio-element">
        <input class="form-check-input" type="radio" bind:group={$howToDisplayCost} name="AveragePriceRadio" id="flexRadioDefault1" value="Average">
        <label class="form-check-label" for="flexRadioDefault1">
            Average Costs
        </label>
      
        <div class="">
            <input class="form-check-input" type="radio" bind:group={$howToDisplayCost} name="AveragePriceRadio" id="flexRadioDefault2" value="Separate">
            <label class="form-check-label" for="flexRadioDefault2">
                Display Separate Costs
            </label>
        </div>
    </div>

    <div class="form-check inline-block radio-element">
        <input class="form-check-input" type="radio" name="CurrencyPriceRadio" id="flexRadioDefault3">
        <label class="form-check-label" for="flexRadioDefault3">
            <div class="inline-flexer">
                Convert Currencies
                <DropDown items={$currencies} fontSize="1.75vmin"/>
            </div>

        </label>
        <div class="">
            <input class="form-check-input" type="radio" name="CurrencyPriceRadio" id="flexRadioDefault4" checked>
            <label class="form-check-label" for="flexRadioDefault4">
                Display Separate Currencies
            </label>
        </div>
    </div>
</div>

<div class="settings-section">
    <h1 class="inline-block">Billing Plans</h1>
    <button class="btn btn-success btn-settings inline-block" on:click={addNewBillingPlan}>Add New Billing Plan</button>
    <button class="btn btn-danger btn-settings inline-block" on:click={deleteLastBillingPlan}>Delete Last Billing Plan</button>

    <div class="inline-flexer">
        <div>
            {#each $billingPlans as billingPlan}
                <input class="billing-plan-input" type="text" bind:value={billingPlan}>
            {/each}
        </div>

        <div style="margin-top: 1.75vmin">

            {#each $billingPlansIncrement as billingPlanIncrement}
                <div class="row-flexer">
                    <h3 style="color:white" class="outline-black">x</h3>
                    <input class="billing-plan-input" type="text" bind:value={billingPlanIncrement}>
                </div>

            {/each}
        </div>

    </div>
</div>

<button class="btn btn-success" id="btn-save-settings" on:click={resetSettingsToDefault}>Reset To Default</button>





