import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "我的博客",
  description: "使用 Next.js + TypeScript + TailwindCSS 构建的现代化博客",
  keywords: ["博客", "Next.js", "TypeScript", "TailwindCSS"],
  authors: [{ name: "博主" }],
  openGraph: {
    title: "我的博客",
    description: "使用 Next.js + TypeScript + TailwindCSS 构建的现代化博客",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "我的博客",
    description: "使用 Next.js + TypeScript + TailwindCSS 构建的现代化博客",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center text-gray-600 dark:text-gray-400">
                <p>
                  &copy; 2024 我的博客. 使用 Next.js + TypeScript + TailwindCSS
                  构建.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
