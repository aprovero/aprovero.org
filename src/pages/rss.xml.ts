import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '@/config/site';

export async function GET(context: { site: URL }) {
  const notes = await getCollection('notes');
  const sortedNotes = notes.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  return rss({
    title: `${siteConfig.name} — Technical Notes`,
    description: siteConfig.description,
    site: context.site || siteConfig.url,
    items: sortedNotes.map((note) => ({
      title: note.data.title,
      pubDate: new Date(note.data.date),
      description: note.data.summary,
      link: `/notes/${note.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}