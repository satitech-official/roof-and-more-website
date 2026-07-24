import { blogPosts, projects, routeList } from "./data";

export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://satitech-official.github.io/roof-and-more-website";
  const now = new Date();
  const routes = [
    "",
    ...routeList,
    ...projects.map((project) => `projects/${project.slug}`),
    ...blogPosts.map((post) => `blog/${post.slug}`),
  ];

  return routes.map((route) => ({
    url: `${baseUrl}/${route}`.replace(/\/$/, ""),
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
