// import { rootNotionPageId } from '@/lib/config';
// import { NotionPage } from '@/components/notion-page';
import getPagesFromRootNotionPage from '@/lib/get-pages-from-root-notion-page';
import { getPage } from '@/lib/notion';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

// call a function to get [] of all pages in the space
// filter them to get sub[]s based on filters/fields
// pass those to each hub's component

export default async function BlogPage() {
  const pageId = 'Blog-160c3f6b1f90801e8602ec879dce9a54';
  const recordMap = await getPage(pageId);

  const AllPages = getPagesFromRootNotionPage(recordMap);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="flex gap-2 w-full rounded-lg bg-[#fbf3db] p-4 text-sm">
          <span>
            💡 Here, you can find my thoughts, articles, and curated collections. Join me as I document my journey.
          </span>
        </div>
      </div>

      <ul className="py-8">
        {AllPages.map((page) => (
          <li key={page.id}>
            <Link
              href={`/blog/${page.slug}`}
              className="flex transition-[background-color] border-y border-gray-200/75 border-b-0 hover:bg-gray-100 active:bg-gray-200"
            >
              <div className="py-2.5 px-1 flex grow justify-between items-center">
                <h2
                  className={cn('max-w-[calc(100%-50px)] font-medium', page.title.length > 50 ? 'text-[13px]' : 'text-sm')}
                >
                  <Balancer>{page.title}</Balancer>
                  {/* {page.title} */}
                </h2>
                <span className="text-gray-500 dark:text-gray-500 text-xs">{page.type}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div>
        <div className="flex w-full rounded-lg bg-[#efefef] p-4 mt-32 text-sm justify-center">
          We do this not because it&apos;s easy, but because we thought it would be easy
        </div>
      </div>
    </div>
  );
}
