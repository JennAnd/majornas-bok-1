import sanityClient from "@sanity/client";

export const SanityClient = sanityClient({
  projectId: process.env.NEXT_PUBLIC_STUDIO_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-09-01",
  token: process.env.NEXT_PUBLIC_STUDIO_AUTH_TOKEN,
  useCdn: false,
});
