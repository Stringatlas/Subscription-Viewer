<script>
  export let subscriptionType = "Month";
  export let width;
  export let height;
  export let fontsize;

  function changeSubscriptionType(type){
    subscriptionType = type;
    console.log("changed subscription to type " + type)
  }
</script>



<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" style="font-size: {fontsize}" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    {subscriptionType}
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <button class="dropdown-item" on:click={() => changeSubscriptionType('Year')}>Year</button>
    <button class="dropdown-item" on:click={() => changeSubscriptionType('Month')}>Month</button>
    <button class="dropdown-item" on:click={() => changeSubscriptionType('Week')}>Week</button>
    <button class="dropdown-item" on:click={() => changeSubscriptionType('Day')}>Day</button>
  </ul>
</div>