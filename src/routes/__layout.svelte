<script>
    import Navbar from "$lib/navbar.svelte";
    import "../app.css";
</script>


<style>
    body {
        background-color: rgb(142, 154, 164);
    }
</style>

<body>
    <Navbar />
    <main>
        <slot></slot>
    </main>
</body>

