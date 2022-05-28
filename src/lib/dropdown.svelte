<script>
  export let value = "";
  export let items = [];
  export let buttonPadding = "1vmin";
  export let fontSize = "2.5vmin";
  export let onChange = () => {};

  function changeValue(type){
    value = type;
    console.log("changed subscription to type " + value)
    onChange();
  }

</script>

<div style="--button-padding: {buttonPadding}; --font-size: {fontSize};">
  <button class="btn button-style dropdown-toggle" type="button" id="dropdownMenu" data-bs-toggle="dropdown" aria-expanded="false">
    {value}
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu">
    {#each items as item}
      <button class="dropdown-item" on:click={() => changeValue(item)}>{item}</button>
    {/each}
  </ul>
</div>

<style lang=scss>
  
  .button-style {
    background-color: rgba(181, 166, 141, 1);
    color: rgba($color: #302D28, $alpha: 1);
    font-size: calc(1.4 * var(--font-size));
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

    font-size: var(--font-size);
    padding: var(--button-padding);

  }

</style>


