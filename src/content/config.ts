import { z, defineCollection } from 'astro:content';

const postTags = ['css', 'writing'] as const;

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    modDate: z.date().optional(),
    description: z.string(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
    tags: z.array(z.enum(postTags)),
  }),
});

export const collections = {
  posts: postsCollection,
};
