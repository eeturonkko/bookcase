import { date, pgTable, varchar } from 'drizzle-orm/pg-core';

export const books = pgTable('books', {
	bookName: varchar('book_name'),
	author: varchar('author'),
	isbn: varchar('isbn').unique().primaryKey(),
	published: date('published', { mode: 'date' })
});

export type Book = typeof books.$inferSelect;
