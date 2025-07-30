# 我的博客

一个使用 Next.js + TypeScript + TailwindCSS 构建的现代化博客。

## 功能特点

- ✨ **响应式设计** - 完美适配桌面端和移动端
- 🌙 **深色模式** - 支持明暗主题切换
- 📝 **Markdown 支持** - 使用 Markdown 编写文章
- 🏷️ **标签系统** - 文章分类和标签管理
- 💬 **评论功能** - 集成 Giscus 评论系统
- 📊 **阅读统计** - 显示文章阅读数和评论数
- 🔍 **SEO 优化** - 完整的 SEO 配置

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: TailwindCSS
- **部署**: GitHub Pages
- **评论**: Giscus (基于 GitHub Issues)

## 本地开发

1. 克隆项目

```bash
git clone https://github.com/yourusername/blog.git
cd blog
```

2. 安装依赖

```bash
npm install
```

3. 启动开发服务器

```bash
npm run dev
```

4. 打开 [http://localhost:3000](http://localhost:3000) 查看结果

## 添加新文章

1. 在 `posts/` 目录下创建 `.md` 文件
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

3. 提交到 GitHub 自动部署

## 部署到 GitHub Pages

### 1. 创建 GitHub 仓库

1. 在 GitHub 上创建一个新的仓库，命名为 `blog`
2. 将代码推送到仓库：

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. 配置 GitHub Pages

1. 进入仓库设置 (Settings)
2. 找到 Pages 设置
3. Source 选择 "GitHub Actions"

### 3. 配置 Giscus 评论系统

#### 步骤 1：安装 Giscus App

1. 访问 [Giscus App](https://github.com/apps/giscus)
2. 点击 "Install" 安装到你的仓库
3. 确保仓库已启用 Issues 功能

#### 步骤 2：获取配置信息

1. **获取仓库 ID**：

   - 访问：https://giscus.app/
   - 输入你的仓库名：`yourusername/blog`
   - 复制显示的 Repository ID

2. **获取分类 ID**：
   - 在仓库设置中创建分类（如 "Announcements"）
   - 或使用默认分类

#### 步骤 3：配置环境变量

创建 `.env.local` 文件：

```bash
# Giscus 配置
NEXT_PUBLIC_GISCUS_REPO=yourusername/blog
NEXT_PUBLIC_GISCUS_REPO_ID=your_repo_id
NEXT_PUBLIC_GISCUS_CATEGORY_ID=your_category_id
```

#### 步骤 4：验证配置

部署后，评论功能将自动加载。本地开发时会显示配置提示。

### 4. 更新配置

更新以下文件中的 GitHub 用户名：

- `src/app/sitemap.ts`
- `src/app/robots.ts`
- `next.config.ts` (如果需要)

### 5. 访问博客

部署完成后，可以通过 `https://yourusername.github.io/blog` 访问博客。

## 项目结构

```
blog/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── page.tsx        # 首页
│   │   ├── about/          # 关于页面
│   │   ├── tags/           # 标签页面
│   │   └── posts/          # 文章页面
│   ├── components/         # React 组件
│   ├── lib/               # 工具函数
│   └── types/             # TypeScript 类型
├── posts/                 # Markdown 文章
├── public/                # 静态资源
└── .github/workflows/     # GitHub Actions
```

## 自定义

### 修改主题

编辑 `tailwind.config.ts` 文件来自定义颜色和样式。

### 添加新功能

- 在 `src/components/` 中添加新组件
- 在 `src/lib/` 中添加工具函数
- 在 `src/app/` 中添加新页面

## 许可证

MIT License
