<script>
    export let currency = "$ Dollar";

    let currencies = [
        "$ Dollar",
        "£ Pound",
        "€ Euro",
        "¥ Yuan/Yen",
        "₹ Rupee"
    ]

    function changeCurrency(){

    }
</script>

<div>
    <button class="btn button-style dropdown-toggle" type="button" id="billingDropdownMenu" data-bs-toggle="dropdown" aria-expanded="false">
        {currency}
    </button>

    <ul class="dropdown-menu" aria-labelledby="billingDropdownMenu">
        <button class="dropdown-item" on:click={() => changeSubscriptionType('Year')}>Year</button>
        <button class="dropdown-item" on:click={() => changeSubscriptionType('Month')}>Month</button>
        <button class="dropdown-item" on:click={() => changeSubscriptionType('Week')}>Week</button>
        <button class="dropdown-item" on:click={() => changeSubscriptionType('Day')}>Day</button>
    </ul>
</div>
<h1>
    Currency:  
</h1>


