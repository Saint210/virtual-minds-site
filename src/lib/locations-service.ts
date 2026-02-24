import { client } from "./sanity";

export type Location = {
    _id: string;
    name: string;
    slug: { current: string };
    metaTitle: string;
    metaDesc: string;
    rentAvg: string;
    rentSavings: string;
    hospitals: string;
    neighborhoods: string[];
    painPoint: string;
    heroImage: any;
    faqZone: string;
};

export async function getLocations(): Promise<Location[]> {
    return await client.fetch(`
    *[_type == "location"] | order(name asc) {
      _id,
      name,
      slug,
      metaTitle,
      metaDesc,
      rentAvg,
      rentSavings,
      hospitals,
      neighborhoods,
      painPoint,
      heroImage,
      faqZone
    }
  `);
}

export async function getLocationBySlug(slug: string): Promise<Location> {
    return await client.fetch(
        `
    *[_type == "location" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      metaTitle,
      metaDesc,
      rentAvg,
      rentSavings,
      hospitals,
      neighborhoods,
      painPoint,
      heroImage,
      faqZone
    }
  `,
        { slug }
    );
}
