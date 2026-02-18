
import { createClient } from "next-sanity";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2024-02-03",
    useCdn: false,
});

async function checkAssets() {
    const query = `*[_type == "sanity.imageAsset"] {
        originalFilename,
        altText,
        title
    }`;
    const assets = await client.fetch(query);
    console.log(JSON.stringify(assets, null, 2));
}

checkAssets();
