/* 
    Unfortunately in current drizzle-kit version we can't automatically get name for primary key.
    We are working on making it available!

    Meanwhile you can:
        1. Check pk name in your database, by running
            SELECT constraint_name FROM information_schema.table_constraints
            WHERE table_schema = 'public'
                AND table_name = 'books'
                AND constraint_type = 'PRIMARY KEY';
        2. Uncomment code below and paste pk name manually
        
    Hope to release this update as soon as possible
*/

-- ALTER TABLE "books" DROP CONSTRAINT "<constraint_name>";--> statement-breakpoint
ALTER TABLE "books" ADD PRIMARY KEY ("isbn");--> statement-breakpoint
ALTER TABLE "books" ALTER COLUMN "book_name" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "books" ALTER COLUMN "isbn" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "books" DROP COLUMN IF EXISTS "id";--> statement-breakpoint
ALTER TABLE "books" ADD CONSTRAINT "books_isbn_unique" UNIQUE("isbn");