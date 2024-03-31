import { z } from 'zod';

export const deleteBookFormSchema = z.object({
	bookName: z.string().min(2).max(50)
});

export const addBookFormSchema = z.object({
	bookName: z.string().min(2).max(50),
	author: z.string().min(2).max(50),
	category: z.string().min(2).max(50),
	isbn: z.string().min(2).max(50),
	published: z.date()
});

export type DeleteBookFormSchema = typeof deleteBookFormSchema;
export type AddBookFormSchema = typeof addBookFormSchema;
