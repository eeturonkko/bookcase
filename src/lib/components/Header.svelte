<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { Search } from 'lucide-svelte';

	const navigationLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'DB', href: '/db' },
		{ name: 'Categories', href: '/categories' }
	];
</script>

<header class="ite flex flex-col">
	<div class="text-center">
		<h1 class="text-3xl font-bold tracking-tighter">Bookcase</h1>
		<p class="tracking-tighter text-gray-600">Find and review books online</p>
	</div>
	<nav class="mx-auto mt-6 flex flex-col items-center gap-2">
		<ul class="flex gap-4 tracking-tighter">
			{#each navigationLinks as { name, href }}
				<li class="font-medium tracking-tighter hover:text-gray-600">
					<a {href}>
						{name}
					</a>
				</li>
			{/each}
		</ul>
		<form action="" class="relative flex">
			<Input placeholder="search for books" class="w-full py-2 pl-3 pr-10" />
			<Button variant="link" class="absolute right-0 top-0 ">
				<Search size={16} />
			</Button>
		</form>
	</nav>
</header>
