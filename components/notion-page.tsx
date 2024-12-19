'use client';

import { isDev } from '@/lib/config';
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
      components={{ nextImage: Image, nextLink: Link, Collection }}
    />
  );
}

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
