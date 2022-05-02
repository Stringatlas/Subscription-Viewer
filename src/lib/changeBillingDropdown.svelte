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

<style lang=scss>
  $button-padding: 1.4vh;

  .button-style {
    background-color: rgba(181, 166, 141, 1);
    color: rgba($color: #302D28, $alpha: 1);
    font-size: 3.5vw;
    padding: 0.4em;
    border-radius: 0.4em;
  }

  .dropdown-menu {
    background-color: rgba($color: #B5A78F, $alpha: 1.0);
    border-radius: 1em;
    justify-self: center;
    align-self: center;
    // position: relative !important;
    // padding: 0.5em;
    padding: 0;
    width: none !important;
    min-width: none;
  }

  .dropdown-item {
    background-color: rgba($color: #B5A78F, $alpha: 1.0);
    color: rgba($color: #302D28, $alpha: 1);
    border-radius: 0.5em;

    // border-style: solid none;
    // border-color: rgba($color: #302D28, $alpha: 1);
    // border-width: 0.2em;

    &:hover {
      background-color: rgba(125, 125, 161, 1);
    }

    font-size: 2.5vmin;
    padding: 1vmin;

  }

</style>


<button class="btn button-style dropdown-toggle" style="font-size: {fontsize}; width:{width}; height:{height};" type="button" id="billingDropdownMenu" data-bs-toggle="dropdown" aria-expanded="false">
  {subscriptionType}
</button>
<ul class="dropdown-menu" aria-labelledby="billingDropdownMenu">
  <button class="dropdown-item" on:click={() => changeSubscriptionType('Year')}>Year</button>
  <button class="dropdown-item" on:click={() => changeSubscriptionType('Month')}>Month</button>
  <button class="dropdown-item" on:click={() => changeSubscriptionType('Week')}>Week</button>
  <button class="dropdown-item" on:click={() => changeSubscriptionType('Day')}>Day</button>
</ul>
