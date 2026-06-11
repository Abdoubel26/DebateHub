import { pgEnum, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

const roleEnum  = pgEnum("role", ["admin", "basic"])

export const users = pgTable("users", {
    id: uuid("id").primaryKey().defaultRandom(),
    clerkId: varchar("clerk_id").notNull().unique(),
    name: varchar("name").notNull(),
    email: varchar("email"),
    role: roleEnum("role").default("basic"),
    imageUrl: varchar("imageUrl"),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date())
})