<script lang="ts">
	import "../app.css";
	import "@fontsource-variable/inter";
	let { children } = $props();
</script>

{@render children()}

<style>
	:global(body) {
		font-family: "Inter Variable", sans-serif;
	}
</style>
