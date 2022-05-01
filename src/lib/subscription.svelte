<script>
    export let name;
    export let price;
    export let subscriptionBilling;
    export let description = "";
    export let image = "/default.jpg";
    import Actions from "$lib/subscriptionactions.svelte";
</script>

<body>
    
</body>
<style lang=scss>
    $transition-time: 0.5s;
    $scale-up: 1.025;
    $element-margin-sides: 2%;
    $element-margin-top-bottom: 1.4%;
    $shadow-color: rgba(76, 76, 83, 0.2);
    $element-bg-color: rgba(157, 157, 161, 63);
    $element-border-color: rgba(181, 171, 123, 71);
    $highlighted-element-border-color: rgba(105, 102, 92, 41);
    $highlighted-element-bg-color: rgba(125, 125, 161, 63);
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
        object-fit: contain;
        margin: $img-margin;
        border-radius: $border-radius;
    }
    .element-flex {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    }
    .highlight {
        // background-color: red;
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
        margin-left: 6%;
    }
</style>

<div class="element element-flex">
    <div>
        <img src="{image}" alt="subscription icon">
    </div>

    <div class="subscription-name resize highlight">
        <h1>{name}</h1>
        <h1>${price}/{subscriptionBilling}</h1>
    </div>

    <div class="resize highlight description">
        {#if description != ""}
            <p><b>Description: </b>{description}</p>
        {/if}
    </div>
</div>