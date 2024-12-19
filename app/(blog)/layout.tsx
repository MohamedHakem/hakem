import type { Metadata } from 'next';
import 'react-notion-x/src/styles.css';
import '@/app/notion.css';

export const metadata: Metadata = {
  title: 'Hakem - Software Developer',
  description: 'Blog'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
