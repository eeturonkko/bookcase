<script lang="ts">
	export let data;
	import File from 'lucide-svelte/icons/file';
	import Ellipsis from 'lucide-svelte/icons/ellipsis';
	import CirclePlus from 'lucide-svelte/icons/circle-plus';
	import Search from 'lucide-svelte/icons/search';

	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import * as Table from '$lib/components/ui/table/index.js';
	import { enhance } from '$app/forms';
	import * as Sheet from '$lib/components/ui/sheet';
	import { toast } from 'svelte-sonner';

	// Filter books based on search query
	let searchQuery = '';

	$: filteredBooks = data.books.filter(
		(book) =>
			book.bookName!.toLowerCase().includes(searchQuery.toLowerCase()) ||
			book.author!.toLowerCase().includes(searchQuery.toLowerCase()) ||
			book.category!.toLowerCase().includes(searchQuery.toLowerCase())
	);
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
					<Sheet.Root>
						<Sheet.Trigger>
							<Button size="sm" class="h-8 gap-1">
								<CirclePlus class="h-3.5 w-3.5" />
								<span class="sr-only sm:not-sr-only sm:whitespace-nowrap"> Add Book </span>
							</Button>
						</Sheet.Trigger>
						<Sheet.Content>
							<Sheet.Header>
								<Sheet.Title>Add book the the database</Sheet.Title>
								<Sheet.Description>
									<form use:enhance action="?/addBookToDb" method="post" class="space-y-4">
										<Input
											type="text"
											name="bookName"
											placeholder="Book Name"
											required
											class="w-full"
										/>
										<Input type="text" name="author" placeholder="Author" required class="w-full" />
										<Input
											type="text"
											name="category"
											placeholder="Category"
											required
											class="w-full"
										/>
										<Input type="text" name="isbn" placeholder="ISBN" required class="w-full" />
										<Input
											type="date"
											name="published"
											placeholder="Published Date"
											required
											class="w-full"
										/>
										<Sheet.Close asChild let:builder>
											<Button
												builders={[builder]}
												on:click={() => toast(`Added book to the database`)}
												type="submit">Add Book</Button
											>
										</Sheet.Close>
									</form>
								</Sheet.Description>
							</Sheet.Header>
						</Sheet.Content>
					</Sheet.Root>
				</div>
			</div>

			<Card.Root>
				<Card.Header>
					<Card.Title>Books</Card.Title>
					<Card.Description>All the books from the bookcase database</Card.Description>
				</Card.Header>
				<Card.Content>
					<Table.Root>
						<Table.Header>
							<Table.Row>
								<Table.Head>Name</Table.Head>
								<Table.Head>Author</Table.Head>
								<Table.Head>Category</Table.Head>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{#if filteredBooks.length === 0}
								<Table.Row>
									<Table.Cell class="text-center">No books found</Table.Cell>
								</Table.Row>
							{/if}
							{#each filteredBooks as { bookName, author, category }}
								<Table.Row>
									<Table.Cell class="font-medium">{bookName}</Table.Cell>
									<Table.Cell>{author}</Table.Cell>
									<Table.Cell>{category}</Table.Cell>
									<Table.Cell>
										<DropdownMenu.Root>
											<DropdownMenu.Trigger asChild let:builder>
												<Button
													builders={[builder]}
													aria-haspopup="true"
													size="icon"
													variant="ghost"
												>
													<Ellipsis class="h-4 w-4" />
													<span class="sr-only">Toggle menu</span>
												</Button>
											</DropdownMenu.Trigger>
											<DropdownMenu.Content align="start">
												<form use:enhance action="?/deleteBookFromDb" method="post">
													<input type="hidden" name="bookName" value={bookName} />
													<DropdownMenu.Label>Actions</DropdownMenu.Label>
													<DropdownMenu.Item>Edit</DropdownMenu.Item>
													<DropdownMenu.Item>
														<button type="submit">Delete</button>
													</DropdownMenu.Item>
												</form>
											</DropdownMenu.Content>
										</DropdownMenu.Root>
									</Table.Cell>
								</Table.Row>
							{/each}
						</Table.Body>
					</Table.Root>
				</Card.Content>
				<Card.Footer></Card.Footer>
			</Card.Root>
		</main>
	</div>
</div>
