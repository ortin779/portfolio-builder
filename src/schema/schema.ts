import { z } from "zod";

const UrlOrPathSchema = z.string().refine((value) => {
  try {
    z.string().url().parse(value);
    return true;
  } catch (error) {
    const pathRegex =
      /^(?:\.{1,2}\/)*[a-zA-Z0-9_\-/]+\/(?:[\w-]+\/)*[\w-]+\.\w+$/;
    const isValidPath = pathRegex.test(value);
    return isValidPath;
  }
});

const ProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  url: z.string().url(),
  image: UrlOrPathSchema,
});

const BlogSchema = z.object({
  title: z.string(),
  description: z.string(),
  url: z.string().url(),
  image: UrlOrPathSchema,
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
  logoUrl: UrlOrPathSchema,
});

const IntroSchema = z.object({
  imageUrl: UrlOrPathSchema,
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
