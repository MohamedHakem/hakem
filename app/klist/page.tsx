import Header from '@/components/klist/header';
import QuestionList from '@/components/klist/question-list';
import StickyFilterSection from '@/components/klist/sticky-filter';
import { Suspense } from 'react';

export const metadata = {
  title: 'Klist - Best Leetcode Questions for Interviews',
  description: 'Klist - Best Leetcode Questions for Interviews',
  openGraph: {
    title: 'Klist - Best Leetcode Questions for Interviews',
    description: '',
    url: 'https://hakem.vercel.app/klist',
    siteName: 'Klist '
    // images: ['/opengraph-image']
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ywkem',
    creator: '@ywkem'
  },
  metadataBase: new URL('https://hakem.vercel.app/klist')
};

export default function Page() {
  return (
    <div className="">
      <Header />

      <StickyFilterSection />

      <div className="mx-auto max-w-3xl p-4 pt-4">
        <Suspense fallback={<div>Loading...</div>}>
          <QuestionList />
        </Suspense>
      </div>
    </div>
  );
}

// async function getStreak(): Promise<number> {
//   const cookieStore = await cookies();
//   const streakCookie = cookieStore.get('streak');
//   const lastStudyDateCookie = cookieStore.get('lastStudyDate');

//   const streak = streakCookie ? parseInt(streakCookie.value) : 0;
//   const lastStudyDate = lastStudyDateCookie ? new Date(lastStudyDateCookie.value) : null;

//   const today = new Date();
//   if (lastStudyDate && lastStudyDate.toDateString() === today.toDateString()) {
//     return streak;
//   } else if (lastStudyDate && lastStudyDate.toDateString() === new Date(today.getTime() - 86400000).toDateString()) {
//     return streak + 1;
//   } else {
//     return 1;
//   }
// }
