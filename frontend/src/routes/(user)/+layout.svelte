<script lang="ts">
	import Header from "$lib/components/layout/user/header.svelte";
	let { children } = $props();
</script>

<Header />
{@render children()}
