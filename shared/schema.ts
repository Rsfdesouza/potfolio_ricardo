import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const timeline = pgTable("timeline", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  date: text("date").notNull(),
  location: text("location"),
  icon: text("icon"),
  category: text("category").notNull(), // "career", "personal", "travel"
  createdAt: timestamp("created_at").defaultNow(),
});

export const downloads = pgTable("downloads", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  fileUrl: text("file_url").notNull(),
  category: text("category").notNull(), // "cv", "guide", "checklist"
  language: text("language").notNull(), // "pt", "en", "es"
  downloads: integer("downloads").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const newsletter = pgTable("newsletter", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name"),
  language: text("language").default("pt"), // "pt", "en", "es"
  subscribed: boolean("subscribed").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  technologies: text("technologies").array().notNull(),
  liveUrl: text("live_url"),
  codeUrl: text("code_url"),
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  image: text("image").notNull(),
  category: text("category").notNull(),
  published: boolean("published").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
  createdAt: true,
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  createdAt: true,
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true,
});

export const insertTimelineSchema = createInsertSchema(timeline).omit({
  id: true,
  createdAt: true,
});

export const insertDownloadSchema = createInsertSchema(downloads).omit({
  id: true,
  createdAt: true,
});

export const insertNewsletterSchema = createInsertSchema(newsletter).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type Timeline = typeof timeline.$inferSelect;
export type InsertTimeline = z.infer<typeof insertTimelineSchema>;
export type Download = typeof downloads.$inferSelect;
export type InsertDownload = z.infer<typeof insertDownloadSchema>;
export type Newsletter = typeof newsletter.$inferSelect;
export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;
