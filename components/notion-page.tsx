'use client';

import { isDev } from '@/lib/config';
import slugify from '@/lib/slugify';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';

export function NotionPage({ recordMap, rootPageId }: { recordMap: ExtendedRecordMap; rootPageId?: string }) {
  if (!recordMap) return null;

  const Collection = dynamic(() => import('react-notion-x/build/third-party/collection').then((m) => m.Collection));

  return (
    <NotionRenderer
      recordMap={recordMap}
      rootPageId={rootPageId}
      rootDomain={isDev ? 'http://localhost:3000/blog' : 'https://hakem.vercel.app/blog'}
      fullPage
      darkMode={false}
      previewImages={false}
      components={{ nextImage: Image, nextLink: CustomLink, Collection }}
    />
  );
}

// or better yet, check how he does it! 
function CustomLink({ href, children, ...rest }: { href: string; children: React.ReactNode }) {
  console.log("🚀 ~ CustomLink ~ children:", children)
  console.log("🚀 ~ CustomLink ~ href:", href)
  
  const pageId = href.split('/').pop() || ''; // Extract the pageId from the href
  const shortId = pageId.slice(-3); // Last 3 characters of pageId
  const slug = slugify(children?.toString() || 'untitled'); // Use children as title
  const customUrl = `/${slug}-${shortId}`; // Build the custom URL

  return (
    <Link href={customUrl} {...rest}>
      {children}
    </Link>
  );
}

CustomLink.displayName = 'CustomLink';
// const CustomLink = ({ href, children, ...props }: LinkProps & { children: React.ReactNode }) => {
//   // Prepend `/blog/` if the link is pointing to an article (modify as needed)
//   const hrefString = typeof href === 'string' ? href : href?.pathname || '';
//   const modifiedHref = hrefString.startsWith('/') ? `/blog${hrefString}` : href;

//   return (
//     <Link href={modifiedHref} {...props}>
//       {children}
//     </Link>
//   );
// };
