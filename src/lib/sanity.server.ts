import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "./sanity";

// This client is for SERVER-SIDE use only. 
// It requires the SANITY_API_TOKEN to be set in .env.local
// DO NOT import this into Client Components.

export const writeClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // We need fresh data for writes
    token: process.env.SANITY_API_TOKEN, // The implementation of the Trojan Horse
});
