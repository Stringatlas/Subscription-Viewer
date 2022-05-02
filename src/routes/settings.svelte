<script>
    export let currency = "$ Dollar";

    let currencies = [
        "$ Dollar",
        "£ Pound",
        "€ Euro",
        "¥ Yuan/Yen",
        "₹ Rupee"
    ];

    function changeCurrency(change_currency){
        currency = change_currency;
    }

    function createDropDownOptions() {

    }

</script>

<style lang=scss>
    .inline-block {
        display: inline-block;
    }

    .currency-container {
        margin: 3vmin;
        justify-items: center;
        justify-content: center;
    }

</style>

<div class="currency-container">
    <h1 class="inline-block">
        Currency:  
    </h1>
    
    <div class="inline-block">
        <button class="btn btn-primary button-style dropdown-toggle" type="button" id="billingDropdownMenu" data-bs-toggle="dropdown" aria-expanded="false">
            {currency}
        </button>
    
        <ul class="dropdown-menu" aria-labelledby="billingDropdownMenu">
            {#each currencies as create_currency}
                <button class="dropdown-item" on:click={() => changeCurrency(create_currency)}>{create_currency}</button>
            {/each}
        </ul>
    </div>
</div>




