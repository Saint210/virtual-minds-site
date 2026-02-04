import { client } from "./sanity";

export type Post = {
    _id: string;
    title: string;
    slug: { current: string };
    excerpt: string;
    mainImage: any;
    categories: string[];
    publishedAt: string;
    body: any;
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
      body
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
      body
    }
  `,
        { slug }
    );
}
