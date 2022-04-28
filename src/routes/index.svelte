<script>
    import Actions from "$lib/subscriptionactions.svelte"
</script>

<Actions />
<style>
    :root {
        --transition-time: 0.5s;
    }

    .flexer {
        display: flex;
        flex-direction: row;
        align-items: flex-end;

        flex: 1;
    }

    .element {
        width: 100px;
        height: 100px;
        border-style: solid;
        margin: 2rem;
        font-size: xx-large;
        text-align: center;
        
        box-shadow: 5px 5px 2px 1px rgba(76, 76, 83, 0.2);

        background-color: aqua;
        transform: scale(1, 1);
        transition: background-color var(--transition-time), transform var(--transition-time);
    }


    .element:hover {

        background-color: rgb(11, 112, 255);
        transform: scale(1.1, 1.1);
        box-shadow: 5px 5px 2px 1px rgba(76, 76, 83, 0.28);
        transition: background-color var(--transition-time), transform var(--transition-time);

        box-shadow: inset;
    }
</style>

<div class="flexer">
    <div class="element">a</div>
    <div class="element">b</div>
    <div class="element">c</div>
</div>






<button class="btn btn-danger">dont click</button>