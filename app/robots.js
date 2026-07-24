export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://roof-and-more.example";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
