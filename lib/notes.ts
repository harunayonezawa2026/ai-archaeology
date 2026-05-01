import fs from "fs";
import path from "path";
import matter from "gray-matter";

const NOTES_DIR = path.join(process.cwd(), "content/notes");

export type NoteMeta = {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  episode: number;
  publishedAt: string;
  tags?: string[];
  series?: string;
  seriesNumber?: number;
  status?: "published" | "draft";
};

export type Note = NoteMeta & { content: string };

function readNote(slug: string): Note | null {
  const filePath = path.join(NOTES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title,
    subtitle: data.subtitle,
    description: data.description,
    episode: data.episode,
    publishedAt: data.publishedAt,
    tags: data.tags ?? [],
    series: data.series,
    seriesNumber: data.seriesNumber,
    status: data.status ?? "published",
    content,
  };
}

export function getAllNotes(): NoteMeta[] {
  if (!fs.existsSync(NOTES_DIR)) return [];
  const files = fs.readdirSync(NOTES_DIR).filter((f) => f.endsWith(".mdx"));
  const notes = files
    .map((f) => readNote(f.replace(/\.mdx$/, "")))
    .filter((n): n is Note => n !== null && n.status !== "draft");
  return notes
    .map(({ content, ...meta }) => meta)
    .sort((a, b) => a.episode - b.episode);
}

export function getNote(slug: string): Note | null {
  return readNote(slug);
}

export function getAllSlugs(): string[] {
  return getAllNotes().map((n) => n.slug);
}
