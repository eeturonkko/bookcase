import { date, integer, pgTable, varchar } from 'drizzle-orm/pg-core';

export const books = pgTable('books', {
	id: integer('id'),
	bookName: varchar('book_name').primaryKey(),
	author: varchar('author'),
	isbn: varchar('isbn'),
	published: date('published')
});
