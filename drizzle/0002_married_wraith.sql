CREATE TYPE "public"."category" AS ENUM('philosophy', 'politics', 'religion', 'ethics', 'science', 'society', 'history', 'psychology', 'culture');--> statement-breakpoint
CREATE TYPE "public"."status" AS ENUM('open', 'in debate', 'ended');--> statement-breakpoint
ALTER TABLE "topics" RENAME COLUMN "is_open" TO "status";--> statement-breakpoint
ALTER TABLE "messages" ADD COLUMN "is_read" boolean DEFAULT false NOT NULL;