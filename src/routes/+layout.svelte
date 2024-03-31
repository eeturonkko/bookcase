<script>
	import '../app.pcss';
	import Header from '$lib/components/Header.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
</script>

<main class="flex min-h-screen flex-col bg-muted/40">
	<section class="container mt-6">
		<Header />
		<Toaster />
		<slot />
	</section>
</main>
