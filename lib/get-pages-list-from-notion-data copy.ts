import { ExtendedRecordMap } from 'notion-types';
import { createSlug, formatDate } from './utils';
// import { ExtendedRecordMap, Decoration, Role, BreadcrumbInstance, Block } from 'notion-types';

// type SubDecoration = BoldFormat | ItalicFormat | StrikeFormat | CodeFormat | UnderlineFormat | LinkFormat | ColorFormat | DateFormat | UserFormat | InlineEquationFormat | PageFormat | ExternalLinkFormat | DiscussionFormat | ExternalObjectInstanceFormat;
// type AdditionalDecoration = [string, SubDecoration[]];
// type BaseDecoration = [string];
// type Decoration = BaseDecoration | AdditionalDecoration;

// interface NotionPage {
//   id: string;
//   title?: string; // Optional property
//   slug?: string; // Optional property
// }

// interface NotionBlock {
//   value?: {
//     type: string;
//     properties?: {
//       title?: [string[]];
//       'X~e]'?: [string[]];
//     };
//   };
// }

// interface NotionProperties {
//   [key: string]: Decoration[];
//   title: Decoration[];
//   'X~e]': Decoration[];
//   GpUZ: Decoration[];
//   'H?[=': Decoration[];
// }

// interface NotionBlock extends Block {
//   value: {
//     id: string;
//     type: string;
//     properties: NotionProperties;
//     created_time: number;
//     last_edited_time: number;
//     parent_id: string;
//     parent_table: string;
//     version: number;
//     alive: boolean;
//     created_by_table: string;
//     created_by_id: string;
//     last_edited_by_table: string;
//     last_edited_by_id: string;
//     format: {
//       domain?: string;
//       original_url?: string;
//     };
//   };
//   role: Role;
// }

// Merge with local additions
// interface ExtraExtendedRecordMap extends ExtendedRecordMap {
//   block: {
//     [key: string]: NotionBlock;
//   };
// }

// interface NotionPage {
//   id: string;
//   title?: string;
//   slug?: string;
//   created_date: number;
//   last_editd_time: number;
// }

export default function getPagesFromRootNotionPage(notionData: ExtendedRecordMap) {
  const pages = [];

  // Iterate through the 'block' object in the Notion data
  for (const blockId in notionData.block) {
    const block = notionData.block[blockId];
    if (block.value && block.value.type === 'page') {
      const page = {
        id: block.value.id,
        ...Object.fromEntries(
          Object.entries(block.value.properties || {})
            .map(([key, value]) => [key === 'X~e]' ? 'slug' : key === 'GpUZ' ? 'author' : key, value[0]?.[0]])
            .filter(([key]) => key !== 'H?[=')
        ),
        created_date: formatDate(block.value.created_time),
        last_edited_time: formatDate(block.value.last_edited_time)
      };

      // if no slug, create one from title
      if (!page.slug) {
        page.slug = createSlug(page.title);
      }

      pages.push(page);
    }
  }

  // Remove the first (root) page
  pages.shift();

  // Sort the pages by created_date (ascending order)
  // TODO: sort by views
  pages.sort((a, b) => {
    if (!a.created_date || !b.created_date) return 0;
    return new Date(a.created_date).getTime() - new Date(b.created_date).getTime();
  });

  return pages;
}

// you can add the last 3 digits from the id to the end of the slug, or not!
// if you change the slug, put the older one on a new [] field/prop called "other_slugs" and check it in the single article page
