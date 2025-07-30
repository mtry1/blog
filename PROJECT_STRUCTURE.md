# 项目结构说明

## 目录结构

```
blog/
├── .github/workflows/          # GitHub Actions 工作流
│   └── deploy.yml             # 自动部署配置
├── posts/                     # Markdown 文章目录
│   ├── hello-world.md         # 示例文章 1
│   ├── getting-started-with-nextjs.md  # 示例文章 2
│   └── tailwindcss-tips.md    # 示例文章 3
├── public/                    # 静态资源
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── layout.tsx         # 根布局
│   │   ├── page.tsx           # 首页
│   │   ├── about/             # 关于页面
│   │   │   └── page.tsx
│   │   ├── tags/              # 标签页面
│   │   │   └── page.tsx
│   │   ├── posts/             # 文章页面
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── robots.ts          # robots.txt 生成器
│   │   └── sitemap.ts         # sitemap.xml 生成器
│   ├── components/            # React 组件
│   │   ├── Comments.tsx       # 评论组件
│   │   ├── Header.tsx         # 头部导航
│   │   ├── PostCard.tsx       # 文章卡片
│   │   └── ThemeToggle.tsx    # 主题切换
│   ├── lib/                   # 工具函数
│   │   └── posts.ts           # 文章处理工具
│   └── types/                 # TypeScript 类型
│       └── blog.ts            # 博客相关类型
├── .gitignore                 # Git 忽略文件
├── DEPLOYMENT.md              # 部署指南
├── next.config.ts             # Next.js 配置
├── package.json               # 项目依赖
├── PROJECT_STRUCTURE.md       # 项目结构说明
├── README.md                  # 项目说明
├── tailwind.config.ts         # TailwindCSS 配置
└── tsconfig.json              # TypeScript 配置
```

## 核心文件说明

### 配置文件

- **`next.config.ts`**: Next.js 配置，支持静态导出到 GitHub Pages
- **`tailwind.config.ts`**: TailwindCSS 配置，包含 typography 插件
- **`tsconfig.json`**: TypeScript 配置
- **`.github/workflows/deploy.yml`**: GitHub Actions 自动部署配置

### 页面文件

- **`src/app/layout.tsx`**: 根布局，包含头部导航和底部
- **`src/app/page.tsx`**: 首页，显示文章列表
- **`src/app/posts/[slug]/page.tsx`**: 文章详情页
- **`src/app/tags/page.tsx`**: 标签页面
- **`src/app/about/page.tsx`**: 关于页面
- **`src/app/robots.ts`**: robots.txt 生成器
- **`src/app/sitemap.ts`**: sitemap.xml 生成器

### 组件文件

- **`src/components/Header.tsx`**: 网站头部导航组件
- **`src/components/PostCard.tsx`**: 文章卡片组件
- **`src/components/ThemeToggle.tsx`**: 深色模式切换组件
- **`src/components/Comments.tsx`**: Giscus 评论组件

### 工具文件

- **`src/lib/posts.ts`**: 文章处理工具函数

  - `getSortedPostsData()`: 获取排序后的文章列表
  - `getPostData(slug)`: 获取单篇文章数据
  - `getAllPostSlugs()`: 获取所有文章 slug
  - `getAllTags()`: 获取所有标签
  - `getPostsByTag(tag)`: 根据标签获取文章

- **`src/types/blog.ts`**: TypeScript 类型定义
  - `Post`: 文章完整类型
  - `PostMeta`: 文章元数据类型
  - `Tag`: 标签类型

### 文章文件

- **`posts/hello-world.md`**: 欢迎文章
- **`posts/getting-started-with-nextjs.md`**: Next.js 入门指南
- **`posts/tailwindcss-tips.md`**: TailwindCSS 技巧

## 功能特性

### 1. 文章管理

- Markdown 文件存储在 `posts/` 目录
- 支持 frontmatter 元数据
- 自动生成文章列表和详情页

### 2. 标签系统

- 文章支持多标签
- 标签页面显示所有标签
- 按标签筛选文章

### 3. 主题切换

- 支持明暗主题切换
- 主题状态保存在 localStorage
- 响应式设计

### 4. 评论系统

- 集成 Giscus 评论
- 基于 GitHub Issues
- 支持深色模式

### 5. SEO 优化

- 自动生成 sitemap.xml
- 配置 robots.txt
- 完整的 meta 标签
- Open Graph 支持

### 6. 部署配置

- GitHub Actions 自动部署
- 静态导出到 GitHub Pages
- 支持自定义域名

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: TailwindCSS + @tailwindcss/typography
- **部署**: GitHub Pages
- **评论**: Giscus
- **构建**: GitHub Actions

## 开发指南

### 添加新文章

1. 在 `posts/` 目录创建 `.md` 文件
2. 添加 frontmatter 元数据
3. 使用 Markdown 编写内容
4. 提交到 GitHub 自动部署

### 自定义样式

1. 编辑 `tailwind.config.ts` 配置主题
2. 修改 `src/components/` 中的组件样式
3. 更新 `src/app/layout.tsx` 中的全局样式

### 添加新功能

1. 在 `src/components/` 中创建新组件
2. 在 `src/lib/` 中添加工具函数
3. 在 `src/app/` 中添加新页面
4. 在 `src/types/` 中定义类型

## 部署流程

1. 推送代码到 GitHub
2. GitHub Actions 自动构建
3. 部署到 GitHub Pages
4. 访问 `https://username.github.io/blog`

## 维护说明

- 定期更新依赖包
- 备份文章内容
- 监控构建状态
- 更新 SEO 配置
