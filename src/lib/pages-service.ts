import { client } from "./sanity";

export async function getPage(slug: string) {
  if (!slug) return null;

  return await client.fetch(
    `
    *[_type == "page" && slug.current == $slug][0] {
      ...,
      sections[] {
        ...,
        _type == "testimonialSection" => {
          testimonials[] {
            ...,
            "imageUrl": image.asset->url
          }
        },
        _type == "heroSection" => {
            "imageUrl": image.asset->url
        }
      }
    }
  `,
    { slug }
  );
}
