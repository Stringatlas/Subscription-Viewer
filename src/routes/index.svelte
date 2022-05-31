<script>
    import Actions from "$lib/subscriptionactions.svelte"
</script>

<style lang=scss>
    $transition-time: 0.5s;
    $scale-up: 1.025;
    $element-margin-sides: 2.2rem;
    $shadow-color: rgba(76, 76, 83, 0.2);
    $element-bg-color: rgba(157, 157, 161, 63);
    $element-border-color: rgba(181, 171, 123, 71);
    $highlighted-element-border-color: rgba(105, 102, 92, 41);
    $highlighted-element-bg-color: rgba(125, 125, 161, 63);

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
        border-color: $element-border-color;
        border-radius: 2rem;

        margin: 0.5rem;
        margin-left: $element-margin-sides;
        margin-right: $element-margin-sides;

        font-size: 4vw;
        text-align: center;
        
        box-shadow: 10px 10px 2px 1px $shadow-color;

        background-color: $element-bg-color;
        transform: scale(1, 1);
        transition: background-color $transition-time, transform $transition-time, border-color $transition-time;
    }


    .element:hover {
        background-color: $highlighted-element-bg-color;
        transform: scale($scale-up, $scale-up) translate(0px, -0.5rem);

        border-color: $highlighted-element-border-color;
        transition: background-color $transition-time, transform $transition-time, border-color $transition-time;
    }

    img {
        font-size: 4vw;
        min-width: 30%;
        max-width: 100px;
        height: auto;
        margin: 2%;
        border-radius: 2rem;
    }

    .element-flex {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .highlight {
        background-color: none;
    }

    .description {
        margin: 1%;
        width: fit-content;
    }

    h1 {
        font-size: 5vw;
    }
    p {
        font-size: 1.5vw;
    }

    #title {
        margin: 0.25em;
    }
</style>

<!-- <Actions />

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
</div> -->

<h1 id="title">How To Use Subscription Viewer</h1>
<ol>
    <li>Add your subscriptions in Manage Data in Subscriptions in the Navbar</li>
    <li>View your subscriptions and find out about pricing in View Subscriptions in Subscriptions in the Navbar</li>
    <li>Adjust Settings in Settings</li>
    <p>*<em>Average Costs</em> find the average cost for each billing period, while <em>Display Separate Costs</em> displays the costs separately by billing period</p>
</ol>

<p>Currency conversion, image upload, and analytics page coming soon</p>