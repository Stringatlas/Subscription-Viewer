<script>
    import DropDown from "$lib/dropdown.svelte"
    export let currency = "$ Dollar";

    let currencies = [
        "$ Dollar",
        "£ Pound",
        "€ Euro",
        "¥ Yuan/Yen",
        "₹ Rupee"
    ];

    let billingPlans = [
        "Daily",
        "Weekly",
        "Monthly",
        "Yearly"
    ];

    function addNewBillingPlan () {
		billingPlans = [...billingPlans, "New billing plan"]
		console.log(billingPlans);
	}
	
	function deleteLastBillingPlan () {
		billingPlans.pop();
		billingPlans = billingPlans;
		console.log(billingPlans)
	}

    function changeCurrency(change_currency){
        currency = change_currency;
    }

    function createDropDownOptions() {

    }

</script>

<style lang=scss>
    $side-margin: 1.5vmin;

    .inline-block {
        display: inline-block;
    }

    .currency-container {
        margin: $side-margin;
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

    #btn-save-settings {
        font-size: 3vmin;
        padding: 1vmin;
    }

    .btn-settings {
        font-size: 2vmin;
        padding: 0.6vmin;
    }
</style>

<div class="title">
    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
    </svg> -->
    <h1 class="text-center">Settings</h1>
</div>


<div class="currency-container">
    <h1 class="inline-block">
        Currency:  
    </h1>
    <div class="inline-block">
        <DropDown items={currencies} fontSize="1.75vmin"/>
    </div>

</div>

<div class="currency-container">
    <h1>Display Prices</h1>
    <h5>(Used in Analytics and Total price display)</h5>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">

        <label class="form-check-label" for="flexRadioDefault1">
          Average Price
        </label>

      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
        <label class="form-check-label" for="flexRadioDefault2">
          Display Separate
        </label>
    </div>
</div>

<div class="currency-container">
    <h1 class="inline-block">Billing Plans</h1>
    <button class="btn btn-success btn-settings inline-block" on:click={addNewBillingPlan}>Add New Billing Plan</button>
    <button class="btn btn-danger btn-settings inline-block" on:click={deleteLastBillingPlan}>Delete Last Billing Plan</button>

    {#each billingPlans as billingPlan}
        <input class="billing-plan-input" type="text" bind:value={billingPlan}>
    {/each}
</div>

<button class="btn btn-success" id="btn-save-settings">Save Settings</button>





