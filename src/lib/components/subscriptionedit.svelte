<script>
    export let subscription;

    export let image = "/default.jpg";
    import Actions from "$lib/subscriptionactions.svelte";
    import DropDown from "$lib/components/dropdown.svelte";
    // import { createEventDispatcher } from 'svelte';
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

        width:100%;
        object-fit: contain;

        max-height: 30vh;
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
        background-color: none;
    }
    .description {
        margin: 1%;
        align-self: center;
    }
    .input {
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
</style>

<div class="element element-flex">
    <div>
        <img src={image} alt="subscription-icon">
    </div>

    <div class="text-center subscription-name resize highlight">

        <div id="subscription-name input name-input">
            <input type="text" placeholder="Subscription Name" value={subscription.name}>
        </div>

        <div id="billing inline-block">
            <input class="input inline-block" type="text" placeholder="price"> 
            <h1 class="inline-block">/</h1>
            <div id="drop-down-parent" class="inline-block">
                <DropDown class="drop-down"/>
            </div>

        </div>
    </div>

    <div class="resize highlight description">
        <p><b>Description: </b>{subscription.description}</p>

    </div>
</div>