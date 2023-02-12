<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto/auto.js';
    import { Subscription } from '$lib/subscriptions.js';

    import { billingPlansIncrement, billingPlans, subscriptions} from "$lib/data/localStore.js";
    import DropDown from "$lib/components/dropdown.svelte";
    import { browser } from "$app/env";

    let canvas;

    let data = [20, 100, 50, 12, 20, 130, 45];
    let labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let ctx;


    let billingPeriod = {value: $billingPlans[0]};

    

    let colors = [];

    let chart;

    if (browser)
    {
        Chart.defaults.backgroundColor = "#808396";

        onMount(() => {
            ctx = canvas.getContext('2d');
            chart = new Chart(canvas, {
                type: 'pie',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: `Price`,
                            data: data,
                            borderRadius: 0,
                            backgroundColor: colors,
                        }
                    ]
                },
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins: {
                        legend: {
                            labels: {
                                font: {
                                    size: 16
                                }
                            }
                        },
                        title: {
                            display: true,
                            text: `Price of subscriptions every ${billingPeriod.value}`,
                            font: {
                                size: 24
                            }
                        }
                    }
                }
            });
        });
    }

    function generateRandomColor() {
        return "#" + Math.floor(Math.random() * 0xffffff).toString(16)
    }

    function onBillingChange() {
        chart.options.plugins.title.text = `Price of subscriptions every ${billingPeriod.value}`;
        CalculatePricesAverage();
        console.log(data)
        updateChart();
    }

    function updateChart() {
        chart.data.labels = labels;
        chart.data.datasets[0].data = data;
        chart.update();
        console.log()
    }

    $: convertedSubscriptions = convertSubscriptions($subscriptions);

    function convertSubscriptions(subscriptions) {
        let _convertedSubscriptions = [];
        
        data = []
        labels = []

        for (let subscription of subscriptions) {
            _convertedSubscriptions.push(new Subscription(subscription.id, subscription.name, subscription.price, subscription.currency,
            subscription.billing, subscription.description, subscription.link, 
            subscription.image));
            data.push(subscription.price)
            labels.push(subscription.name)
        }

        let colorsNeeded = labels.length - colors.length;
        
        for (let i = 0; i < (colorsNeeded); i++) {
            colors.push(getRandomColor())
        }
        CalculatePricesAverage();

        return _convertedSubscriptions;
    }

    function CalculatePricesAverage() {
        var tempBillingPlans = $billingPlans;
        tempBillingPlans.forEach((plan) => plan.toLowerCase())
        let targetBillingPlanIndex = tempBillingPlans.indexOf(billingPeriod.value.toLowerCase());
        
        data = []

        for (let subscription of $subscriptions) {
            let billingPlan = subscription.billing;
            let billingPlanIndex  = tempBillingPlans.indexOf(billingPlan.toLowerCase());
            
            var fromIndex = Math.min(targetBillingPlanIndex, billingPlanIndex);
            var toIndex = Math.max(targetBillingPlanIndex, billingPlanIndex);

            var multiplier = 1;

            for (let i = fromIndex; i < toIndex; i++) {
                multiplier *= parseFloat($billingPlansIncrement[i]);
            }

            if (targetBillingPlanIndex < billingPlanIndex) {
                data.push((subscription.price / multiplier).toFixed(2));
            }
            else
            {
                data.push((subscription.price * multiplier).toFixed(2));
            }   
        }
    }
    
</script>

<script context="module"> 
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    export function colorFromRandom(random) {
        return Math.floor(random * 0xffffff).toString(16)
    }
    export function prngColor(seed) {
        let random = prng(seed);
        return "#" + colorFromRandom(random);
    }

    export function randomColor() {
        let random = Math.random();
        return "#" + colorFromRandom(random)
    }

    export function prng(seed) {
        let num = cyrb128(seed).reduce((partialSum, a) => partialSum + a, 0);
        let length = num.toString().length;

        return num / (10 ** length);
    }

    export function getColorBrightness(color) {
        const hex = color.replace('#', '');
        const c_r = parseInt(hex.substr(0, 2), 16);
        const c_g = parseInt(hex.substr(2, 2), 16);
        const c_b = parseInt(hex.substr(4, 2), 16);
        const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
        return brightness;
    }

    export function colorBrightnessOf(color) {
        var color = color.substring(1);      // strip #
        var rgb = parseInt(color, 16);   // convert rrggbb to decimal

        console.log(rgb);

        var r = (rgb >> 16) & 0xff;  // extract red
        var g = (rgb >>  8) & 0xff;  // extract green
        var b = (rgb >>  0) & 0xff;  // extract blue

        console.log(r, g, b);

        var luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b; // from ITU-R BT.709

        return luminance;
    }
    export function cyrb128(str) {
        let h1 = 1779033703, h2 = 3144134277,
            h3 = 1013904242, h4 = 2773480762;
        for (let i = 0, k; i < str.length; i++) {
            k = str.charCodeAt(i);
            h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
            h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
            h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
            h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
        }
        h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
        h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
        h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
        h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
        return [(h1^h2^h3^h4)>>>0, (h2^h1)>>>0, (h3^h1)>>>0, (h4^h1)>>>0];
    }

    

</script>
<div class="top-bar">
    <h2>Pie chart</h2>

    <div style="margin-left: 1vw;">
        <DropDown bind:value={billingPeriod.value} items={$billingPlans} onChange={onBillingChange}/>
    </div>
    
    
    
</div>


<div class="canvas-parent">
    <canvas bind:this={canvas}/>
</div>


<style>
    .top-bar > *{
        display: inline-block;
        margin-bottom: 1vh;
    }

    canvas {
        background-color: rgb(188, 195, 209);
        border-radius: 3vmin;
        border-width: 20px;
        border: solid;
        border-color: "#393c52";
    }

    h2 {
        margin-left: 1vw;
    }

    .canvas-parent {
        position:relative;
        width: 98vw;
        height: 65vh;
        margin-left: 1vw;
        margin-right: 1vw;
    }

</style>

