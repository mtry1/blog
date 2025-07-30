import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { Post, PostMeta } from "@/types/blog";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData(): PostMeta[] {
  // 获取 posts 目录下的所有文件名
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // 移除文件名中的 ".md" 获取 id
    const slug = fileName.replace(/\.md$/, "");

    // 读取 markdown 文件内容
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // 使用 gray-matter 解析 markdown 文件的元数据部分
    const matterResult = matter(fileContents);

    // 组合数据与 slug
    return {
      slug,
      ...(matterResult.data as {
        title: string;
        date: string;
        excerpt: string;
        tags: string[];
      }),
      readCount: 0,
      commentCount: 0,
    };
  });

  // 按日期排序
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // 使用 gray-matter 解析 markdown 文件的元数据部分
  const matterResult = matter(fileContents);

  // 使用 remark 将 markdown 转换为 HTML 字符串
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // 组合数据与 slug
  return {
    slug,
    content: contentHtml,
    ...(matterResult.data as {
      title: string;
      date: string;
      excerpt: string;
      tags: string[];
    }),
    readCount: 0,
    commentCount: 0,
  };
}

export function getAllTags(): { [key: string]: number } {
  const posts = getSortedPostsData();
  const tags: { [key: string]: number } = {};

  posts.forEach((post) => {
    post.tags?.forEach((tag) => {
      tags[tag] = (tags[tag] || 0) + 1;
    });
  });

  return tags;
}

export function getPostsByTag(tag: string): PostMeta[] {
  const posts = getSortedPostsData();
  return posts.filter((post) => post.tags?.includes(tag));
}
