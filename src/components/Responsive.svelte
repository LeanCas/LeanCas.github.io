<script>
	import { sidebarOpen, sidebarIsInert, sidebarStayOpen } from '../stores.js';
	import { onMount } from 'svelte';
	export let breakPoint = 1024;
	let width;
	$: if (width >= breakPoint) {
		console.log(`Viewport width ${width} >= ${breakPoint}, enabling sidebar`);
		sidebarStayOpen.update((n) => (n = true));
		sidebarOpen.update((n) => (n = true));
		sidebarIsInert.update((n) => (n = false));
	} else {
		console.log(`Viewport width ${width} < ${breakPoint}, disabling sidebar`);
		sidebarStayOpen.update((n) => (n = false));
		sidebarOpen.update((n) => (n = false));
		sidebarIsInert.update((n) => (n = true));
	}
	onMount(() => {
		console.log(`Initial viewport width: ${width}px`);
		if (width >= breakPoint) {
			sidebarStayOpen.update((n) => (n = true));
			sidebarOpen.update((n) => (n = true));
			sidebarIsInert.update((n) => (n = false));
		} else {
			sidebarStayOpen.update((n) => (n = false));
			sidebarOpen.update((n) => (n = false));
			sidebarIsInert.update((n) => (n = true));
		}
	});
</script>

<svelte:window bind:innerWidth={width} /> 