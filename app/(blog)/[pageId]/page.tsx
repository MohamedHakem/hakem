// import { rootNotionPageId } from '@/lib/config';
import { NotionPage } from '@/components/notion-page';
import * as notion from '@/lib/notion';
import { defaultMapPageUrl, getAllPagesInSpace } from 'notion-utils';

import { isDev, rootNotionPageId, rootNotionSpaceId } from '@/lib/config';

import 'react-notion-x/src/styles.css';
import '@/app/notion.css';

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

  return paths;
}

export default async function ThoughtPage({ params }: { params: Promise<{ pageId: string }> }) {
  const pageId = `/blog/${(await params).pageId}`;
  console.log('🚀 ~ ThoughtPage ~ pageId:', pageId);
  const recordMap = await notion.getPage(pageId);
  console.log('🚀 ~ ThoughtPage ~ recordMap:', recordMap);

  return <NotionPage recordMap={recordMap} rootPageId={pageId} />;
}
