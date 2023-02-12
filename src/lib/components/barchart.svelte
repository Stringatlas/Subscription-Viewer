<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto/auto.js';
    import { Subscription } from '$lib/subscriptions.js';

    import { billingPlansIncrement, billingPlans, subscriptions} from "$lib/data/localStore.js";
    import DropDown from "$lib/components/dropdown.svelte";

    let data = [20, 100, 50, 12, 20, 130, 45];
    let labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let ctx;
    let canvas;

    let billingPeriod = {value: $billingPlans[0]};

    Chart.defaults.backgroundColor = "#808396"

    let chart;
    onMount(() => {
        ctx = canvas.getContext('2d');
        chart = new Chart(canvas, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: `Price`,
                        data: data,
                        borderRadius: 10,
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
                                size: 24
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

<div class="top-bar">
    <h2>Bar Chart</h2>

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