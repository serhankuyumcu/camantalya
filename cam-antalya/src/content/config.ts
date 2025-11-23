import { defineCollection, z } from "astro:content";

// Blog koleksiyonunu tanımlıyoruz
const blogCollection = defineCollection({
  type: "content", // Markdown içeriği olduğunu belirtir
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    heroImage: z.string().optional(),
    keywords: z.array(z.string()).optional(),
  }),
});

// Koleksiyon adını ('posts') dışarıya aktarıyoruz. Bu ad, getCollection('posts') ile eşleşmelidir.
export const collections = {
  posts: blogCollection,
};
