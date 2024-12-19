// import { rootNotionPageId } from '@/lib/config';
import { NotionPage } from '@/components/notion-page';
import * as notion from '@/lib/notion';

import 'react-notion-x/src/styles.css';
import '@/app/notion.css';

import { defaultMapPageUrl, getAllPagesInSpace } from 'notion-utils';
import { isDev, rootNotionPageId, rootNotionSpaceId } from '@/lib/config';

export async function generateStaticParams() {
  if (isDev) {
    return [];
  }

  const mapPageUrl = defaultMapPageUrl(rootNotionPageId);

  const pages = await getAllPagesInSpace(rootNotionPageId, rootNotionSpaceId, notion.getPage, {
    traverseCollections: false
  });

  const paths = Object.keys(pages)
    .map((pageId) => mapPageUrl(pageId))
    .filter((path) => path && path !== '/');

  const formattedPaths = paths.map((path) => ({ pageId: path.replace(/^\/+/, '') }));

  return formattedPaths;
}

export default async function ThoughtPage({ params }: { params: Promise<{ pageId: string }> }) {
  const { pageId } = await params;
  const recordMap = await notion.getPage(pageId);

  return <NotionPage recordMap={recordMap} rootPageId={pageId} />;
}
