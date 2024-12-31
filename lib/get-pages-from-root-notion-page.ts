import { ExtendedRecordMap } from 'notion-types';
import { createSlug, formatDate } from './utils';
import { pageType } from './types';

export default function getPagesFromRootNotionPage(notionData: ExtendedRecordMap) {
  const pages: pageType[] = [];
  for (const blockId in notionData.block) {
    const block = notionData.block[blockId];
    if (block.value && block.value.type === 'page') {
      // console.log('~ block.value ~');
      // console.dir(block.value, { depth: null });

      const page = {
        id: block.value.id,
        ...Object.fromEntries(
          Object.entries(block.value.properties || {})
            .map(([key, value]) => [
              key === 'X~e]' ? 'slug' : key === 'GpUZ' ? 'author' : key === 'Y}Be' ? 'type' : key,
              value[0]?.[0]
            ])
            .filter(([key]) => key !== 'H?[=')
        ),
        created_date: formatDate(block.value.created_time),
        last_edited_time: formatDate(block.value.last_edited_time)
      };

      if (!page.slug) {
        page.slug = createSlug(page.title);
      }

      pages.push(page);
    }
  }

  pages.shift();

  // Sort by created_date // TODO: sort by views
  pages.sort((a, b) => {
    if (!a.created_date || !b.created_date) return 0;
    return new Date(b.created_date).getTime() - new Date(a.created_date).getTime();
  });

  return pages;
}

// you can add the last 3 digits from the id to the end of the slug, or not!
// if you change the slug, put the older one on a new [] field/prop called "other_slugs" and check it in the single article page
