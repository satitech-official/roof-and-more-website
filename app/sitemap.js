import { blogPosts, projects, routeList } from "./data";

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://roof-and-more.example";
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
