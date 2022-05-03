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

    .title {
        margin-top: 3vmin;
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




