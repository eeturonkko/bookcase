<script lang="ts">
	export let data;
	import File from 'lucide-svelte/icons/file';
	import Search from 'lucide-svelte/icons/search';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import BooksDisplay from '$lib/components/BooksDisplay.svelte';
	import AddBookButton from '$lib/components/AddBookButton.svelte';

	// Filter books based on search query
	let searchQuery = '';

	$: filteredBooks = data.books
		.filter(
			(book) =>
				book.bookName!.toLowerCase().includes(searchQuery.toLowerCase()) ||
				book.author!.toLowerCase().includes(searchQuery.toLowerCase()) ||
				book.category!.toLowerCase().includes(searchQuery.toLowerCase())
		)
		.sort((a, b) => a.bookName!.localeCompare(b.bookName!));
</script>

<div class="mt-8 flex min-h-screen w-full flex-col">
	<div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
		<header
			class="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"
		>
			<div class="relative ml-auto flex-1 md:grow-0">
				<Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
				<Input
					bind:value={searchQuery}
					type="search"
					placeholder="Search..."
					class="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
				/>
			</div>
		</header>
		<main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
			<div class="flex items-center">
				<div class="ml-auto flex items-center gap-2">
					<Button size="sm" variant="outline" class="h-8 gap-1">
						<File class="h-3.5 w-3.5" />
						<span class="sr-only sm:not-sr-only sm:whitespace-nowrap"> Export </span>
					</Button>
					<AddBookButton />
				</div>
			</div>
			<BooksDisplay data={{ filteredBooks: filteredBooks }} />
		</main>
	</div>
</div>
