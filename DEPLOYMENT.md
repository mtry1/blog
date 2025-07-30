# 博客部署指南

## 1. 创建 GitHub 仓库

1. 在 GitHub 上创建一个新的仓库，命名为 `blog`
2. 确保仓库是公开的（GitHub Pages 免费版需要公开仓库）

## 2. 推送代码到 GitHub

```bash
# 初始化 Git 仓库（如果还没有）
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit: 创建博客项目"

# 添加远程仓库（替换 YOUR_USERNAME 为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/blog.git

# 推送到 GitHub
git push -u origin main
```

## 3. 配置 GitHub Pages

1. 进入你的 GitHub 仓库
2. 点击 "Settings" 标签
3. 在左侧菜单中找到 "Pages"
4. 在 "Source" 部分选择 "GitHub Actions"
5. 保存设置

## 4. 配置 Giscus 评论系统

### 4.1 启用 Issues 功能

1. 在仓库设置中，确保 "Issues" 功能已启用
2. 进入 "Features" 部分，确保 "Issues" 已勾选

### 4.2 安装 Giscus App

1. 访问 [Giscus App](https://github.com/apps/giscus)
2. 点击 "Install"
3. 选择你的 `blog` 仓库
4. 完成安装

### 4.3 获取仓库信息

1. 访问 [GitHub GraphQL Explorer](https://docs.github.com/en/graphql/overview/explorer)
2. 运行以下查询获取仓库 ID：

```graphql
query {
  repository(owner: "YOUR_USERNAME", name: "blog") {
    id
  }
}
```

3. 在仓库设置中创建一个新的分类（Category），记录分类 ID

### 4.4 更新评论配置

编辑 `src/components/Comments.tsx` 文件，更新以下配置：

```typescript
script.setAttribute("data-repo", "YOUR_USERNAME/blog");
script.setAttribute("data-repo-id", "YOUR_REPO_ID"); // 从 GraphQL 查询获取
script.setAttribute("data-category-id", "YOUR_CATEGORY_ID"); // 从仓库设置获取
```

## 5. 更新配置文件

### 5.1 更新 sitemap.ts

编辑 `src/app/sitemap.ts`，将 `yourusername` 替换为你的 GitHub 用户名：

```typescript
const baseUrl = "https://YOUR_USERNAME.github.io";
```

### 5.2 更新 robots.ts

编辑 `src/app/robots.ts`，将 `yourusername` 替换为你的 GitHub 用户名：

```typescript
sitemap: 'https://YOUR_USERNAME.github.io/sitemap.xml',
```

### 5.3 更新 next.config.ts（可选）

如果你的仓库名不是 `blog`，需要更新 `next.config.ts`：

```typescript
basePath: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME' : '',
```

## 6. 重新部署

推送更新后的代码：

```bash
git add .
git commit -m "更新配置"
git push
```

## 7. 验证部署

1. 等待 GitHub Actions 完成部署（通常需要几分钟）
2. 访问 `https://YOUR_USERNAME.github.io/blog` 查看博客
3. 测试以下功能：
   - 首页文章列表
   - 文章详情页
   - 深色模式切换
   - 标签页面
   - 关于页面
   - 评论功能

## 8. 添加新文章

1. 在 `posts/` 目录下创建新的 `.md` 文件
2. 添加 frontmatter 元数据：

```markdown
---
title: "文章标题"
date: "2024-01-15"
excerpt: "文章摘要"
tags: ["标签1", "标签2"]
---

文章内容...
```

3. 提交并推送：

```bash
git add posts/your-new-post.md
git commit -m "添加新文章: 文章标题"
git push
```

## 9. 故障排除

### 9.1 构建失败

- 检查 TypeScript 错误
- 确保所有依赖已安装
- 检查文件路径和导入

### 9.2 页面无法访问

- 确认 GitHub Pages 已启用
- 检查 basePath 配置
- 验证仓库是公开的

### 9.3 评论不显示

- 确认 Giscus App 已安装
- 检查仓库 ID 和分类 ID
- 确保 Issues 功能已启用

## 10. 自定义配置

### 10.1 修改主题

编辑 `tailwind.config.ts` 文件来自定义颜色和样式。

### 10.2 添加新功能

- 在 `src/components/` 中添加新组件
- 在 `src/lib/` 中添加工具函数
- 在 `src/app/` 中添加新页面

### 10.3 SEO 优化

- 更新 `src/app/layout.tsx` 中的元数据
- 修改 `src/app/sitemap.ts` 中的 URL
- 更新 `src/app/robots.ts` 中的配置

## 11. 性能优化

1. 图片优化：使用 Next.js Image 组件
2. 代码分割：利用 Next.js 自动代码分割
3. 缓存策略：配置适当的缓存头
4. CDN：考虑使用 CDN 加速

## 12. 安全考虑

1. 定期更新依赖包
2. 使用环境变量存储敏感信息
3. 启用 GitHub 安全功能
4. 定期备份内容

---

完成以上步骤后，你的博客就成功部署到 GitHub Pages 了！🎉
