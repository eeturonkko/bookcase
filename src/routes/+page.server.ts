/* import { db } from '$lib/db/index';
import { formSchema } from './formSchema';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate } from 'sveltekit-superforms';
import { books } from '$lib/db/schema';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async () => {
	return {
		books: await db.query.books.findMany()
	};
};

export const actions: Actions = {
	addBookToDb: async (event) => {
		const form = await superValidate(event, zod(formSchema));
		const { bookName, author, isbn, published } = form.data;
		console.log(bookName, author, isbn, published);
		await db.insert(books).values({ bookName, author, isbn, published });
	}
};
 */
