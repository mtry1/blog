import Link from "next/link";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";
import { Eye, MessageCircle } from "lucide-react";
import { PostMeta } from "@/types/blog";

interface PostCardProps {
  post: PostMeta;
}

export default function PostCard({ post }: PostCardProps) {
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString + "T00:00:00Z"), "yyyy年MM月dd日", {
        locale: zhCN,
      });
    } catch {
      return dateString;
    }
  };

  return (
    <Link href={`/posts/${post.slug}`}>
      <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 p-6 border border-gray-200 dark:border-gray-700">
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
              {post.excerpt}
            </p>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={post.date}>{formatDate(post.date)}</time>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{post.readCount}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="w-4 h-4" />
                <span>{post.commentCount}</span>
              </div>
            </div>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
