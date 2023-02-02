<script>
    import Barchart from "$lib/components/barchart.svelte";
    import PieChart from "$lib/components/piechart.svelte";
</script>

<style>
    h1 {
        text-align: center;
    }

</style>

<h1>Analytics</h1>

<div style="margin-bottom: 5vh;">
    <Barchart />
</div>

<div>
    <PieChart />
</div>
