import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.enum(['World', 'Technology', 'Business', 'Science', 'Culture', 'Opinion']),
    author: z.string(),
    authorSlug: z.string(),
    authorBio: z.string(),
    authorAvatar: z.string().url(),
    date: z.date(),
    readTime: z.number(),
    image: z.string().url(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()),
  }),
});

export const collections = { articles };
