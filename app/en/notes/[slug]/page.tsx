import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllSlugs, getNote } from "@/lib/notes";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllSlugs("en").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const note = getNote(params.slug, "en");
  if (!note) return {};
  return {
    title: note.title,
    description: note.description,
    openGraph: {
      title: note.title,
      description: note.description,
      type: "article",
    },
  };
}

export default function NotePageEN({ params }: { params: { slug: string } }) {
  const note = getNote(params.slug, "en");
  if (!note) notFound();

  return (
    <article>
      <header className="bg-navy text-paper">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
          <div className="text-gold-500 text-xs tracking-[0.3em] mb-3">
            {note.series && note.series !== "Introduction"
              ? `${note.series.toUpperCase()}${note.seriesNumber ? " #" + note.seriesNumber : ""}`
              : `EPISODE ${String(note.episode).padStart(2, "0")}`}
            {" ・ "}{note.publishedAt}
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold leading-tight mb-3">
            {note.title}
          </h1>
          {note.subtitle && (
            <div className="text-paper/80 text-base sm:text-lg">{note.subtitle}</div>
          )}
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-12">
        <div className="prose prose-lg max-w-none font-sans">
          <MDXRemote
            source={note.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
          />
        </div>

        <div className="mt-16 pt-8 border-t border-navy/10 flex justify-between items-center">
          <Link href="/en" className="text-gold-600 hover:text-gold-700 text-sm">
            ← All episodes
          </Link>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              `https://ai-archaeology.vercel.app/en/notes/${note.slug}`
            )}&text=${encodeURIComponent(note.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-600 hover:text-gold-700 text-sm"
          >
            Share on X →
          </a>
        </div>
      </div>
    </article>
  );
}
