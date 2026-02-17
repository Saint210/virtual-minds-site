import { client } from "./sanity";

export type Author = {
  name: string;
  image: any;
  credentials?: string;
  role?: string;
  bio?: any;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
};

export type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  mainImage: any;
  categories: string[];
  publishedAt: string;
  body: any;
  author?: Author;
};

export async function getPosts(): Promise<Post[]> {
  return await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      categories,
      publishedAt,
      body,
      "author": author-> {
        name,
        image,
        credentials,
        role,
        bio,
        socialLinks
      }
    }
  `);
}

export async function getPostBySlug(slug: string): Promise<Post> {
  return await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      categories,
      publishedAt,
      body,
      "author": author-> {
        name,
        image,
        credentials,
        role,
        bio,
        socialLinks
      }
    }
  `,
    { slug }
  );
}

export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await client.fetch(`*[_type == "post"] { "slug": slug.current }`);
  return posts.map((p: any) => p.slug);
}

export async function getPostsForRSS(): Promise<any[]> {
  return await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      categories
    }
  `);
}
