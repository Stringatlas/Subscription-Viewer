<script>
    export let name;
    export let price;
    export let subscriptionPlan;
    export let description;
</script>

<style>
    h2{
        margin: 0;
        padding: 0.2em;
    }

    .name-and-price {
        margin-left: 1rem;
        margin-right: 1rem;
        background-color: rgb(79, 91, 97);
        width:min-content;
        display: inline-block;

    }

    .subscription-card {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;

        justify-content: flex-start !important;

        background-color: rgb(1, 91, 97);
        
        margin: 1em;
        padding: 1em;
        padding-bottom: 0.3em;

        border-style: solid;
        border-color: rgb(78, 35, 92);
        border-width: 4px;
    }

    p{
        padding: 0.2em;
        font-size: larger;
    }

    .description-container {
        padding: 1;
        background-color: aqua;
        flex: 0.8;
    }

    .increase {
        animation-name: dilate;
        animation-duration: 1s;
    }

    @keyframes dilate{
        from {
            width: 0%;
        }
        to {
            width: 100%;
        }
    }
    
    h1{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        padding: 0.2em;
        color: rgb(209, 218, 112);
    }

    img {
        align-self: center;
        margin: 0;
    }
</style>


<div class="increase subscription-card">

    <img src="default.jpg" alt=" " height=50%>

    <div class="name-and-price">
        <h2>{name}</h2>
        <h1>{price}/{subscriptionPlan}</h1>
    </div>

    <div class="description-container">
        {#if description != "" }
            {#if description != undefined}
                <p>Description: {description}</p>
            {/if}
        {/if}
    </div>
</div>