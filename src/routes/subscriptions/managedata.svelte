<script>
    import DeleteData from "$lib/single-use/deletealldata.svelte";
    import EditSubscriptions from "$lib/single-use/editSubscriptions.svelte";
    let deleteDiv;

    function scrollToDelete() {
        deleteDiv.scrollIntoView({
            behavior: 'smooth'
        });
    }
</script>

<button class="btn btn-primary" on:click={scrollToDelete}>Delete all subscriptions</button>
<EditSubscriptions />

<div id="go" bind:this={deleteDiv}>
    <DeleteData />
</div>
