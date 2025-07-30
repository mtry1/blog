export interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
  excerpt: string;
  tags: string[];
  readCount: number;
  commentCount: number;
}

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readCount: number;
  commentCount: number;
}

export interface Tag {
  name: string;
  count: number;
}
