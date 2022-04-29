<script>
    import Actions from "$lib/subscriptionactions.svelte"
</script>

<Actions />
<style lang=scss>
    $transition-time: 0.5s;
    $scale-up: 1.05;
    $element-margin-sides: 4rem;

    .resize {
        
    }

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
        max-height: 500px;
        border-style: solid;
        border-width: 0.15em;
        border-color: rgba(181, 171, 123, 71);
        border-radius: 2rem;

        margin: 0.5rem;
        margin-left: $element-margin-sides;
        margin-right: $element-margin-sides;

        font-size: 4vw;
        text-align: center;
        
        box-shadow: 10px 10px 2px 1px rgba(76, 76, 83, 0.2);

        background-color: rgba(157, 157, 161, 63);
        transform: scale(1, 1);
        transition: background-color $transition-time, transform $transition-time, border-color $transition-time;
    }


    .element:hover {
        background-color: rgba(125, 125, 161, 63);
        transform: scale($scale-up, $scale-up) translate(0px, -0.5rem);

        border-color: rgba(105, 102, 92, 41);
        box-shadow: 5px 5px 2px 1px rgba(76, 76, 83, 0.28);
        transition: background-color $transition-time, transform $transition-time, border-color $transition-time;
    }

    img {
        min-width: 30%;
        max-width: 100px;
        height: auto;
        margin: 2%;
    }

    .element-flex {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .highlight {
        background-color: red;
    }

    .description {
        margin: 1%;
        width: fit-content;
        align-self: flex-start !important;
        border: solid;
    }

    h1 {
        font-size: 5vw;
    }
    p {
        font-size: 1.5vw;
    }
</style>

<div class="flexer">
    <div class="element element-flex">
        <img src="/netflix.png" alt="subscription icon">
        <div class="resize highlight">
            <h1>Netflix</h1>
            <h1>$9.99/month</h1>
        </div>
        <div class="resize highlight description">
            <p><b>Description:</b> blah labtlawe paweothawioe hpaweoth awoe thawetophaweoit hawep oahw towepto iwpoeiwheqo thweqio thweqoit hiweqht iewoqh twoqhp toiweqth </p>
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