import { getSortedPostsData } from "@/lib/posts";

export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://mtry1.github.io";
  const posts = getSortedPostsData();

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}/`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/tags/`,
      lastModified: new Date(),
    },
    ...postUrls,
  ];
}
