set client_min_messages to warning;
-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;
create schema "public";

CREATE TABLE "public"."favoritesList" (
	"petId" integer NOT NULL,
	"userId" integer NOT NULL,
	"name" TEXT NOT NULL,
  "photos" TEXT NOT NULL,
	"city" TEXT NOT NULL,
	"age" TEXT NOT NULL,
	"breed" TEXT NOT NULL,
	"size" TEXT NOT NULL,
	"gender" TEXT NOT NULL,
  "url" TEXT NOT NULL,
  "email" TEXT NULL,
  "phone" VARCHAR NULL,
  "state" TEXT NOT NULL,
  "postcode" integer NOT NULL,
  "address1" TEXT NULL
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."users" (
	"userId" serial NOT NULL,
	"username" text NOT NULL UNIQUE,
	"hashedPassword" text NOT NULL,
	"joinedAt" timestamptz NOT NULL default now(),
  CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "favoritesList" ADD CONSTRAINT "favoritesList_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
