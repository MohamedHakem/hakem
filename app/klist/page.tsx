import { FilterBar } from '@/components/klist/filter-bar';
import ProgressBar from '@/components/klist/progress-bar';
import QuestionList from '@/components/klist/question-list';
import Header from '@/components/klist/header';
import { Suspense } from 'react';

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl p-4">
      <Header />

      <div className="my-4 flex gap-2">
        <ProgressBar />
        <Suspense fallback={<div>Loading...</div>}>
          <FilterBar />
        </Suspense>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <QuestionList />
      </Suspense>
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
