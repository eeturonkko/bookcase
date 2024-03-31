<script lang="ts">
	import * as Card from '$lib/components/ui/card';

	const cardData = [
		{
			title: 'Discover',
			desc: 'Find and review books online',
			content:
				'Discover books from a wide range of categories and authors. Find your next read and share your thoughts with the community.'
		},
		{
			title: 'Contribute',
			desc: 'Share your thoughts and reviews with the community',
			content:
				'Share your thoughts and reviews with the community. Contribute to the database by adding books and authors.'
		},
		{
			title: 'Database',
			desc: 'Explore a diverse database of books and authors.',
			content:
				'Explore a diverse database of books and authors. Find books from a wide range of categories and authors.'
		},
		{
			title: 'Organize',
			desc: 'Organize your reading list',
			content:
				"Organize your reading list. Keep track of books you've read, want to read, and are currently reading."
		}
	];
  
</script>

<div class="mt-6 grid grid-cols-2 place-items-center gap-5 p-4">
	{#each cardData as { title, desc, content }}
		<Card.Root>
			<Card.Header>
				<Card.Title>{title}</Card.Title>
				<Card.Description>{desc}</Card.Description>
			</Card.Header>
			<Card.Content>
				<p class="text-balance">{content}</p>
			</Card.Content>
		</Card.Root>
	{/each}
</div>
