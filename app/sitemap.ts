import type { MetadataRoute } from "next";
import { getAllNotes } from "@/lib/notes";

const SITE = "https://ai-archaeology.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const ja = getAllNotes("ja");
  const en = getAllNotes("en");

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, changeFrequency: "daily", priority: 1.0 },
    { url: `${SITE}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE}/apps`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE}/en`, changeFrequency: "daily", priority: 1.0 },
    { url: `${SITE}/en/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE}/en/apps`, changeFrequency: "monthly", priority: 0.5 },
  ];

  const jaNotes: MetadataRoute.Sitemap = ja.map((n) => ({
    url: `${SITE}/notes/${n.slug}`,
    lastModified: n.publishedAt,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const enNotes: MetadataRoute.Sitemap = en.map((n) => ({
    url: `${SITE}/en/notes/${n.slug}`,
    lastModified: n.publishedAt,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...jaNotes, ...enNotes];
}
