import { FilterBar } from '@/components/klist/filter-bar';
import ProgressBar from '@/components/klist/progress-bar';
import QuestionList from '@/components/klist/question-list';
import Header from '@/components/klist/header';
import { Suspense } from 'react';
import StickyFilterSection from '@/components/klist/sticky-filter';

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
