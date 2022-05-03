<script>
    import { GoogleCharts } from "google-charts";
    import { onMount } from "svelte";
    let chartObj;
    // onMount(() => {
    //     GoogleCharts.load(drawChart);

    //     function drawChart() {
    //         // Standard google charts functionality is available as GoogleCharts.api after load
    //         const data = GoogleCharts.api.visualization.arrayToDataTable([
    //             ["Chart thing", "Chart amount"],
    //             ["Lorem ipsum", 60],
    //             ["Dolor sit", 22],
    //             ["Sit amet", 18],
    //         ]);
    //         const pie_1_chart = new GoogleCharts.api.visualization.PieChart(
    //             chartObj
    //         );
    //         pie_1_chart.draw(data);
    //     }
    // })

</script>

<h1>pie chart</h1>
<div id="myChart" bind:this={chartObj} style="max-width:700px; height:400px" />
