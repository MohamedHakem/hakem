// import { rootNotionPageId } from '@/lib/config';
import { NotionPage } from '@/components/notion-page';
import * as notion from '@/lib/notion';

export default async function ThoughtsPage() {
  const pageId = 'Blog-160c3f6b1f90801e8602ec879dce9a54';
  const recordMap = await notion.getPage(pageId);

  return <NotionPage recordMap={recordMap} rootPageId={pageId} />;
}
