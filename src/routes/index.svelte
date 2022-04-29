<script>
    import Actions from "$lib/subscriptionactions.svelte"
</script>

<Actions />
<style lang=scss>
    $transition-time: 0.5s;
    $scale-up: 1.05;
    $element-margin-sides: 4rem;

    .flexer {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex-wrap: nowrap;
        flex: 1;
    }

    .element {
        width: calc(100% - $element-margin-sides * 2);
        height: fit-content;
        border-style: solid;
        margin: 0.5rem;
        margin-left: $element-margin-sides;
        margin-right: $element-margin-sides;

        font-size: xx-large;
        text-align: center;
        
        box-shadow: 5px 5px 2px 1px rgba(76, 76, 83, 0.2);

        background-color: aqua;
        transform: scale(1, 1);
        transition: background-color $transition-time, transform $transition-time;
    }


    .element:hover {
        background-color: rgb(11, 112, 255);
        transform: scale($scale-up, $scale-up) translate(0px, -0.5rem);

        box-shadow: 5px 5px 2px 1px rgba(76, 76, 83, 0.28);
        transition: background-color $transition-time, transform $transition-time;

        box-shadow: inset;
    }

    img {
        margin: 1rem;
    }

    .element-flex {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .highlight {
        margin: 1rem;
        background-color: red;
    }

    .description {
        align-self: flex-start;
    }
</style>

<div class="flexer">
    <div class="element element-flex">
        <img src="/default.jpg" alt="">
        <div class="highlight">
            <h1>Netflix</h1>
            <h1>$9.99/month</h1>
        </div>
        <div class="highlight description">
            <p>Description: </p>
        </div>
    </div>
    <div class="element">b</div>
    <div class="element">c</div>
    <div class="element">a</div>
    <div class="element">b</div>
    <div class="element">c</div>
    <div class="element">a</div>
    <div class="element">b</div>
    <div class="element">c</div>
</div>

<button class="btn btn-danger">dont click</button>