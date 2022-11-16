import fs from "fs";
import path from "path";

export const getAllPostsSlug = (): string[] =>
  fs
    .readdirSync(path.join(process.cwd(), "pages/blog"))
    // Only include md(x) files
    .filter((p) => /\.mdx?$/.test(p))
    // Remove file extensions for page paths
    .map((p) => p?.replace(/\.mdx?$/, ""));

export const getAllPostsData = (): string[] =>
  fs
    .readdirSync(path.join(process.cwd(), "pages/blog"))
    // Only include md(x) files
    .filter((p) => /\.mdx?$/.test(p))
    // Remove file extensions for page paths
    .map((p) => p?.replace(/\.mdx?$/, ""));

export const getSinglePostData = (slug: string): Buffer =>
  fs.readFileSync(path.join(process.cwd(), `pages/blog/${slug}.mdx`));

export const getSingleDocsData = (route: string, slug: string): Buffer =>
  fs.readFileSync(path.join(process.cwd(), `pages/${route}/${slug}.mdx`));

export const getAllDocs = (route: string): string[] =>
  fs
    .readdirSync(path.join(process.cwd(), `pages/${route}`))
    // Only include md(x) files
    .filter((p) => /\.mdx?$/.test(p))
    // Remove file extensions for page paths
    .map((p) => p?.replace(/\.mdx?$/, ""));
