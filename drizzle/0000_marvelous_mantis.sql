CREATE TABLE IF NOT EXISTS "books" (
	"id" integer,
	"book_name" varchar PRIMARY KEY NOT NULL,
	"author" varchar,
	"isbn" varchar,
	"published" date
);
