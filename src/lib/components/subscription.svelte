<script>
    import {Subscription} from "$lib/subscriptions.js";

    export let subscription;
</script>

<body>
    
</body>
<style lang=scss>
    $transition-time: 0.5s;
    $scale-up: 1.025;
    $element-margin-sides: 2%;
    $element-margin-top-bottom: 1.4%;
    $shadow-color: rgba(76, 76, 83, 0.2);
    $element-bg-color: rgba(157, 157, 161, 1);
    $element-border-color: rgba(181, 171, 123, 1);
    $highlighted-element-border-color: rgba(105, 102, 92, 1);
    $highlighted-element-bg-color: rgba(125, 125, 161, 1);
    $border-radius: 1em;

    .element {
        width: calc(100% - $element-margin-sides * 2) !important;
        height: fit-content;
        max-height: 500px;
        border-style: solid;
        border-width: 0.15em;
        border-color: $element-border-color;
        border-radius: $border-radius;
        margin-top: $element-margin-top-bottom;
        margin-bottom: $element-margin-top-bottom;
        margin-left: $element-margin-sides;
        margin-right: $element-margin-sides;
        font-size: 4vw;
        
        box-shadow: 10px 10px 2px 1px $shadow-color;
        background-color: $element-bg-color;
        transform: scale(1, 1);
        transition: background-color $transition-time, transform $transition-time, border-color $transition-time;
    }

    .element:hover {
        background-color: $highlighted-element-bg-color;
        transform: scale($scale-up, $scale-up) translate(0px, -0.25em);
        border-color: $highlighted-element-border-color;
        transition: background-color $transition-time, transform $transition-time, border-color $transition-time;
    }
    $img-margin: 5%;

    img {
        font-size: 4vw;
        min-width: 20vw;
        max-width: 40vw;

        max-height: 30vh;
        width:100%;

        object-fit: contain;

        width:100%;

        border-radius: $border-radius;
    }

    #img-div {
        margin: $img-margin;
        background-color: none;
    }


    .element-flex {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    }
    .highlight {
        background-color: none;
    }
    .description {
        margin: 1%;
        align-self: center;
    }
    h1 {
        font-size: 5vw;
    }
    p {
        font-size: 1.5vw;
    }
    .resize {
        flex-shrink: 1;
    }
    .subscription-name {
        margin-left: 3%;
    }

    #left-side {
        display: flexbox;
        flex-direction: column;
        align-content: center;
    }
</style>

<div class="element element-flex">
    <div id="left-side">
        <div id="img-div">
            <img src={subscription.image} alt="subscription-icon">
        </div>
        <!-- <a href="https://www.costco.com" target="_blank" rel="noopener noreferrer">Redirect </a> -->
    </div>


    <div class="text-center subscription-name resize highlight">
        <h1 href={subscription.link}>{subscription.name}</h1>
        <h1>{subscription.currency[0]}{subscription.price}/{subscription.billing}</h1>
    </div>

    <div class="resize highlight description">
        {#if subscription.description != ""}
            {#if subscription.description != null && subscription.description != undefined}
                <p><b>Description: </b>{subscription.description}</p>
            {/if}
        {/if}
    </div>
</div>