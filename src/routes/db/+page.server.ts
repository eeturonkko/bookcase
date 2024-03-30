import type { PageServerLoad } from './$types';
import { db } from '$lib/db/index';

export const load: PageServerLoad = async () => {
	return {
		books: await db.query.books.findMany()
	};
};
