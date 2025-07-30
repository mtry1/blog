import Link from "next/link";
import { getAllTags, getSortedPostsData } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export const metadata = {
  title: "标签 - 我的博客",
  description: "浏览所有文章标签",
};

export default function TagsPage() {
  const tags = getAllTags();
  const posts = getSortedPostsData();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          标签
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          浏览所有文章标签
        </p>
      </div>

      {/* 标签列表 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          所有标签
        </h2>
        <div className="flex flex-wrap gap-3">
          {Object.entries(tags).map(([tag, count]) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
            >
              {tag} ({count})
            </Link>
          ))}
        </div>
      </div>

      {/* 最新文章 */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          最新文章
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 6).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
