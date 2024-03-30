import type { PageServerLoad, Actions } from './$types';
import { db } from '$lib/db/index';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate } from 'sveltekit-superforms';
import { books } from '$lib/db/schema';
import { eq } from 'drizzle-orm';
import { formSchema } from '../formSchema';
/* import { redirect } from '@sveltejs/kit'; */

export const load: PageServerLoad = async () => {
	return {
		books: await db.query.books.findMany()
	};
};

export const actions: Actions = {
	deleteBookFromDb: async (event) => {
		const form = await superValidate(event, zod(formSchema));
		const { bookName } = form.data;
		await db.delete(books).where(eq(books.bookName, bookName));
	}
};
