// import '@/app/notion.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import 'react-notion-x/src/styles.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Hakem's blog",
  description: 'Hakem is a Software Engineer and founder of Slty.',
  openGraph: {
    title: "Hakem's blog",
    description: 'Hakem is a Software Engineer and founder of Slty.',
    url: 'https://rauchg.com',
    siteName: "Hakem's blog"
    // images: ['/opengraph-image']
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ywkem',
    creator: '@ywkem'
  },
  metadataBase: new URL('https://hakem.vercel.app')
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${inter.className} antialiased min-h-screen bg-white`}>
      <div className="text-gray-800 dark:text-gray-300 py-12 md:py-20">
        <div className="max-w-xl px-4 mx-auto sm:px-6 xl:px-0 flex flex-col justify-between pt-0 md:pt-8 p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
