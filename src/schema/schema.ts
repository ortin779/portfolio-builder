import { z } from "zod";

const ProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  url: z.string().url(),
  image: z.string().url(),
});

const BlogSchema = z.object({
  title: z.string(),
  description: z.string(),
  url: z.string().url(),
  image: z.string().url(),
});

const FooterConfigSchema = z.object({
  email: z.string().email(),
  github: z.string().url(),
  instagram: z.string().url().optional(),
  twitter: z.string().url().optional(),
});

const AboutSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  designation: z.string(),
  description: z.string(),
});

const HeaderSchema = z.object({
  title: z.string(),
  profilePhotoUrl: z.string().url(),
  logoUrl: z.string().url(),
});

const IntroSchema = z.object({
  imageUrl: z.string().url(),
  description: z.string(),
});

export const AppConfigSchema = z.object({
  header: HeaderSchema,
  footer: FooterConfigSchema,
  intro: IntroSchema,
  projects: z.array(ProjectSchema).optional(),
  blogs: z.array(BlogSchema).optional(),
  about: AboutSchema,
});

export type Project = z.infer<typeof ProjectSchema>;
export type Blog = z.infer<typeof BlogSchema>;
export type FooterConfig = z.infer<typeof FooterConfigSchema>;
export type About = z.infer<typeof AboutSchema>;
export type AppConfig = z.infer<typeof AppConfigSchema>;
