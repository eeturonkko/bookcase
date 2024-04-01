<script lang="ts">
	import { enhance } from '$app/forms';
	import * as Sheet from '$lib/components/ui/sheet';
	import { toast } from 'svelte-sonner';
	import CirclePlus from 'lucide-svelte/icons/circle-plus';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
</script>

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
					<Input type="text" name="bookName" placeholder="Book Name" required class="w-full" />
					<Input type="text" name="author" placeholder="Author" required class="w-full" />
					<Input type="text" name="category" placeholder="Category" required class="w-full" />
					<Input
						type="text"
						name="isbn"
						maxlength={13}
						placeholder="ISBN"
						required
						class="w-full"
					/>
					<Input
						type="date"
						name="published"
						placeholder="Published Date"
						required
						class="w-full"
					/>
					<Button on:click={() => toast(`Added book to the database`)} type="submit">
						Add Book
					</Button>
				</form>
			</Sheet.Description>
		</Sheet.Header>
	</Sheet.Content>
</Sheet.Root>
