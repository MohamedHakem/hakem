import { NotionAPI } from 'notion-client';
import { type ExtendedRecordMap } from 'notion-types';

const notion = new NotionAPI();

export async function getPage(pageId: string): Promise<ExtendedRecordMap> {
  console.log('🚀 ~ notion.ts ~ getPage ~ pageId:', pageId);
  const page = await notion.getPage(pageId);
  return page;
}
