<script>
    import Navbar from "../navbar.svelte";
</script>

<Navbar />

<img src="defaultimage.png" alt=" ">

<style>
    .flexer {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }

    .element {
        width: 100px;
        height: 100px;
        background-color: aqua;
    }
</style>

<div class="flexer">
    <div class="element">a</div>
    <div class="element">b</div>
    <div class="element">c</div>
</div>
<button class="btn-danger">dont click</button>