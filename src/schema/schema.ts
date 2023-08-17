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

const ContactConfigSchema = z.object({
  email: z.string().email(),
  github: z.string().url(),
  linkedIn: z.string().url(),
  instagram: z.string().url().optional(),
  twitter: z.string().url().optional(),
});

const SkillSchema = z.object({
  name: z.string(),
  imageUrl: UrlOrPathSchema,
  level: z.number().min(1).max(100),
});

const AboutSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  designation: z.string(),
  description: z.string(),
  skills: z.array(SkillSchema),
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
  contact: ContactConfigSchema,
  intro: IntroSchema,
  projects: z.array(ProjectSchema).optional(),
  blogs: z.array(BlogSchema).optional(),
  about: AboutSchema,
});

export type Project = z.infer<typeof ProjectSchema>;
export type Blog = z.infer<typeof BlogSchema>;
export type ContactConfig = z.infer<typeof ContactConfigSchema>;
export type About = z.infer<typeof AboutSchema>;
export type Skill = z.infer<typeof SkillSchema>;
export type AppConfig = z.infer<typeof AppConfigSchema>;
