// Set NEXT_PUBLIC_SITE_URL to the production domain when deploying
// (e.g. https://vignesh.dev) so OG images, sitemap, and robots resolve correctly.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
