export const metadata = {
  title: "关于 - 我的博客",
  description: "了解更多关于这个博客的信息",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          关于
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>关于这个博客</h2>
          <p>
            这是一个使用现代技术栈构建的个人博客，旨在分享技术文章、学习心得和个人见解。
          </p>

          <h2>技术栈</h2>
          <ul>
            <li>
              <strong>框架</strong>: Next.js 14 (App Router)
            </li>
            <li>
              <strong>语言</strong>: TypeScript
            </li>
            <li>
              <strong>样式</strong>: TailwindCSS
            </li>
            <li>
              <strong>部署</strong>: GitHub Pages
            </li>
            <li>
              <strong>评论系统</strong>: Giscus (基于 GitHub Issues)
            </li>
          </ul>

          <h2>功能特点</h2>
          <ul>
            <li>✨ 响应式设计，完美适配各种设备</li>
            <li>🌙 深色模式支持</li>
            <li>📝 Markdown 文章支持</li>
            <li>🏷️ 标签分类系统</li>
            <li>💬 评论功能</li>
            <li>📊 阅读统计</li>
            <li>🔍 SEO 优化</li>
          </ul>

          <h2>开源</h2>
          <p>
            这个博客是开源的，你可以在 GitHub 上找到完整的源代码。 欢迎提交
            Issue 和 Pull Request 来改进这个项目。
          </p>

          <h2>联系方式</h2>
          <p>如果你有任何问题或建议，欢迎通过以下方式联系：</p>
          <ul>
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/yourusername"
                className="text-blue-600 dark:text-blue-400"
              >
                @yourusername
              </a>
            </li>
            <li>邮箱: your.email@example.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
