"use client";

import { useEffect } from "react";

interface CommentsProps {
  slug: string;
  title: string;
}

export default function Comments({ slug, title }: CommentsProps) {
  useEffect(() => {
    // 只在生产环境或配置正确时加载 Giscus
    const isProduction = process.env.NODE_ENV === "production";
    const isConfigured =
      process.env.NEXT_PUBLIC_GISCUS_REPO &&
      process.env.NEXT_PUBLIC_GISCUS_REPO_ID;

    if (!isProduction && !isConfigured) {
      // 开发环境且未配置时，显示提示信息
      const commentsContainer = document.getElementById("comments");
      if (commentsContainer) {
        commentsContainer.innerHTML = `
          <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <div class="flex items-center space-x-2 mb-2">
              <svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
              </svg>
              <span class="font-medium text-blue-800 dark:text-blue-200">评论功能</span>
            </div>
            <p class="text-sm text-blue-700 dark:text-blue-300">
              评论功能需要在部署后配置 Giscus。请参考 <code class="bg-blue-100 dark:bg-blue-800 px-1 rounded">DEPLOYMENT.md</code> 文件中的配置说明。
            </p>
          </div>
        `;
      }
      return;
    }

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute(
      "data-repo",
      process.env.NEXT_PUBLIC_GISCUS_REPO ||
        "YOUR_GITHUB_USERNAME/YOUR_REPO_NAME"
    );
    script.setAttribute(
      "data-repo-id",
      process.env.NEXT_PUBLIC_GISCUS_REPO_ID || "YOUR_REPO_ID"
    );
    script.setAttribute("data-category", "Announcements");
    script.setAttribute(
      "data-category-id",
      process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || "YOUR_CATEGORY_ID"
    );
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "preferred_color_scheme");
    script.setAttribute("data-lang", "zh-CN");
    script.crossOrigin = "anonymous";
    script.async = true;

    const commentsContainer = document.getElementById("comments");
    if (commentsContainer) {
      commentsContainer.appendChild(script);
    }

    return () => {
      if (commentsContainer) {
        commentsContainer.innerHTML = "";
      }
    };
  }, [slug, title]);

  return (
    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        评论
      </h3>
      <div id="comments" className="giscus" />
    </div>
  );
}
