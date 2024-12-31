// import { rootNotionPageId } from '@/lib/config';
import { NotionPage } from '@/components/notion-page';
import { getPage } from '@/lib/notion';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakem - Blog',
  description: 'Blog'
};

export default async function BlogPage() {
  const pageId = 'Blog-160c3f6b1f90801e8602ec879dce9a54';
  // const pageId = rootNotionPageId;
  const recordMap = await getPage(pageId);
  console.dir(recordMap, { depth: null });

  // for the root page's collection items,
  // change the link from {id}, to {slug}-{last-3-digits-of-id}

  // the title would be here
  // properties => title, slugify it with a slugifyTitle()

  // the array with links to change would be here: change from {id} to {slug}-{last-3-digits-of-id}
  // recordMap block obj => collectionQuery => pageId-keyed object => pageId-keyed object => collection_group_results value => blockIds[]

  return <NotionPage recordMap={recordMap} rootPageId={pageId} />;
}
