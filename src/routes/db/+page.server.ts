import type { PageServerLoad, Actions } from './$types';
import { db } from '$lib/db/index';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate } from 'sveltekit-superforms';
import { books } from '$lib/db/schema';
import { eq } from 'drizzle-orm';
import { deleteBookFormSchema, addBookFormSchema } from './formSchema';

export const load: PageServerLoad = async () => {
	return {
		books: await db.query.books.findMany()
	};
};

export const actions: Actions = {
	deleteBookFromDb: async (event) => {
		const form = await superValidate(event, zod(deleteBookFormSchema));
		const { bookName } = form.data;
		await db.delete(books).where(eq(books.bookName, bookName));
	},
	addBookToDb: async (event) => {
		const form = await superValidate(event, zod(addBookFormSchema));
		const { bookName, author, category, isbn, published } = form.data;
		await db.insert(books).values({ bookName, author, category, isbn, published });
	}
};
