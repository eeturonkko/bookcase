import { z } from 'zod';

export const formSchema = z.object({
	bookName: z.string().min(2).max(50),
	author: z.string().min(2).max(50),
	isbn: z.string().min(10).max(50),
	published: z.date()
});

export type FormSchema = typeof formSchema;
