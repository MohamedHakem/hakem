import { NotionPage } from '@/components/notion-page';
import { isDev, rootNotionPageId, rootNotionSpaceId } from '@/lib/config';
import { getPage } from '@/lib/notion';
import { notFound } from 'next/navigation';
import { defaultMapPageUrl, getAllPagesInSpace } from 'notion-utils';

export async function generateStaticParams() {
  if (isDev) return [];

  const mapPageUrl = defaultMapPageUrl(rootNotionPageId);

  const pages = await getAllPagesInSpace(rootNotionPageId, rootNotionSpaceId, getPage, {
    traverseCollections: false
  });
  // console.log('🚀 ~ generateStaticParams ~ pages:', pages);

  const paths = Object.keys(pages)
    .map((pageId) => mapPageUrl(pageId))
    .filter((path) => path && path !== '/');

  // format/clean it here or in the ThoughtPage
  const formattedPaths = paths.map((path) => ({ pageId: path.replace(/^\/+/, '') }));

  return formattedPaths;
}

export default async function ThoughtPage({ params }: { params: Promise<{ pageId: string }> }) {
  // get {slug}-{last-4-digits-of-id} (self-healing URL)
  const { pageId } = await params;
  // console.log('🚀 ~ ThoughtPage ~ pageId:', pageId);
  // get all ids
  const pages = await getAllPagesInSpace(rootNotionPageId, rootNotionSpaceId, getPage, {
    traverseCollections: false
  });

  const paths = Object.keys(pages)
    .map((pageId) => pageId)
    .filter((path) => path && path !== '/');
  // console.log('🚀 ~ ThoughtPage ~ paths:', paths);
  // match/filter with pageId from params
  // instead of matching the whole id, to be self healing, we match only the last 3 digits and ignore the slug/rest
  const matchedPageId = paths.find((path) => path.slice(-3) === pageId.slice(-3));
  // console.log('🚀 ~ ThoughtPage ~ matchedPageId:', matchedPageId);
  if (!matchedPageId) return notFound();

  // pass pageId to notion, then to NotionPage
  const recordMap = await getPage(matchedPageId);

  return <NotionPage recordMap={recordMap} rootPageId={matchedPageId} />;
}
