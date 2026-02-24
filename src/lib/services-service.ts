import { client } from "./sanity";

export type Service = {
  _id: string;
  name: string;
  slug: { current: string };
  tagline: string;
  description: string;
  icon: string;
  mainImage: any;
  price: string;
  tags: string[];
  yield: string;
  features: { title: string; detail: string }[];
  body: any;
  order: number;
};

export async function getServices(): Promise<Service[]> {
  return await client.fetch(`
    *[_type == "service"] | order(order asc) {
      _id,
      name,
      slug,
      tagline,
      description,
      icon,
      mainImage,
      price,
      tags,
      yield,
      features,
      body,
      order
    }
  `);
}

export async function getServiceBySlug(slug: string): Promise<Service> {
  return await client.fetch(
    `
    *[_type == "service" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      tagline,
      description,
      icon,
      mainImage,
      price,
      tags,
      yield,
      features,
      body,
      order
    }
  `,
    { slug }
  );
}
