
import { createClient } from "next-sanity";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2024-02-03",
    useCdn: false,
    token: process.env.SANITY_API_TOKEN || process.env.NEXT_PUBLIC_SANITY_API_TOKEN // We need a write token if we were strictly server-side, but here we might rely on dataset permissions or need a token.
    // Wait, client-side writes in Sanity usually require a token unless datasets are public-write (rare).
    // The previous server action used `client` from `@/lib/sanity`.
    // Let's assume the public dataset might not be writable without a token.
    // I will check if I have a token in env.
});

// Since I don't see a token in the env file view earlier, I might need one.
// However, the user's `src/lib/sanity.ts` didn't seem to export a specific token-bearing client.
// It exported a `createClient` with just projectId/dataset.
// Writes usually fail without a token.
// IMPORTANT: The server action `updateMediaMetadata` works because Next.js server actions might have access to a token server-side if configured?
// Or maybe the dataset allows public writes (insecure but possible).
// OR `src/lib/sanity.ts` doesn't have a token, effectively meaning writes via `client.patch` in `media.ts` will FAIL if no token is provided.

// Let's check `src/lib/sanity.ts` again to see if it has a token.
// It does NOT have a token.
// This means the `updateMediaMetadata` server action I wrote EARLIER might fail if I don't have a token.
// The user has `.env.local`. I should check if there is a `SANITY_API_TOKEN` in there.
// I viewed it earlier in `ADDITIONAL_METADATA` context?... No, I viewed `.env.local` line 13.
// I will read `.env.local` to see if there is a token.
