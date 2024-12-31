import { Toaster } from '@/components/ui/toaster';
import { Provider } from 'react-wrap-balancer';
import './globals.css';

export const metadata = {
  title: 'Hakem - Software Engineer',
  description: 'Hakem is a Software Engineer and founder of Slty.',
  openGraph: {
    title: 'Hakem - Software Engineer',
    description: 'Hakem is a Software Engineer and founder of Slty.',
    url: 'https://rauchg.com',
    siteName: 'Hakem '
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
    <html lang="en">
      <body className="bg-[#f7f5f3] min-h-screen">
        <Provider>{children}</Provider>
        {/* {children} */}
        <Toaster />
      </body>
    </html>
  );
}
