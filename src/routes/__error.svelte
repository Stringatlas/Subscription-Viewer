<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export function load({ error, status }) {
		return {
			props: { error, status }
		};
	}
</script>

<script>
	/** @type {number} */
	export let status;

	/** @type {Error & {frame?: string} & {loc?: object}} */
	export let error;
</script>

<h1>{status}</h1>

<style>
    h1 {
        margin: 1em;
    }
</style>

<div class="text-center">
    <h1>
        Error Page Not Found
    </h1>
</div>

<pre>{error.message}</pre>

<!-- TODO figure out what to do with frames/stacktraces in prod -->
<!-- frame is populated by Svelte in its CompileError and is a Rollup/Vite convention -->
{#if error.frame}
	<pre>{error.frame}</pre>
{/if}
{#if error.stack}
	<pre>{error.stack}</pre>
{/if}




