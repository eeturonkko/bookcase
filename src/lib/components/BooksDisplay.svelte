<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import Ellipsis from 'lucide-svelte/icons/ellipsis';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { enhance } from '$app/forms';
	import { toast } from 'svelte-sonner';
	export let data: any;
</script>

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
				{#if data.filteredBooks.length === 0}
					<Table.Row>
						<Table.Cell class="text-center">No books found</Table.Cell>
					</Table.Row>
				{/if}
				{#each data.filteredBooks as { bookName, author, category }}
					<Table.Row>
						<Table.Cell class="font-medium">{bookName}</Table.Cell>
						<Table.Cell>{author}</Table.Cell>
						<Table.Cell>{category}</Table.Cell>
						<Table.Cell>
							<DropdownMenu.Root>
								<DropdownMenu.Trigger asChild let:builder>
									<Button builders={[builder]} aria-haspopup="true" size="icon" variant="ghost">
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
											<button on:click={() => toast('Deleted book from the database')} type="submit"
												>Delete</button
											>
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
