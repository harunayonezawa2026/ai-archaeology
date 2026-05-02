import fs from "fs";
import path from "path";
import matter from "gray-matter";

const NOTES_DIR_JA = path.join(process.cwd(), "content/notes");
const NOTES_DIR_EN = path.join(process.cwd(), "content/notes/en");

export type Locale = "ja" | "en";

function dirFor(locale: Locale) {
  return locale === "en" ? NOTES_DIR_EN : NOTES_DIR_JA;
}

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

function readNote(slug: string, locale: Locale): Note | null {
  const filePath = path.join(dirFor(locale), `${slug}.mdx`);
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

export function getAllNotes(locale: Locale = "ja"): NoteMeta[] {
  const dir = dirFor(locale);
  if (!fs.existsSync(dir)) return [];
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") && !fs.statSync(path.join(dir, f)).isDirectory());
  const notes = files
    .map((f) => readNote(f.replace(/\.mdx$/, ""), locale))
    .filter((n): n is Note => n !== null && n.status !== "draft");
  return notes
    .map(({ content, ...meta }) => meta)
    .sort((a, b) => b.episode - a.episode);
}

export function getNote(slug: string, locale: Locale = "ja"): Note | null {
  return readNote(slug, locale);
}

export function getAllSlugs(locale: Locale = "ja"): string[] {
  return getAllNotes(locale).map((n) => n.slug);
}
