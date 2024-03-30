<script lang="ts">
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';
	export let data: PageData;
	const books = data.books;
</script>

<section class="flex flex-col">
	<h1>Welcome to Bookcase</h1>

	{#each books as book}
		<p>{book.bookName} by {book.author}</p>
	{/each}
	<form use:enhance method="POST" action="?/addBookToDb" class="flex w-1/2 flex-col gap-4">
		<label for="book-name">Book name</label>
		<input type="text" id="book-name" name="bookName" />
		<label for="author">Author</label>
		<input type="text" id="author" name="author" />
		<label for="isbn">Isbn</label>
		<input type="text" id="isbn" name="isbn" />
		<label for="published">Published</label>
		<input type="date" id="published" name="published" />
		<button type="submit">Add book</button>
	</form>
</section>
