import { FilterBar } from '@/components/klist/filter-bar';
import ProgressBar from '@/components/klist/progress-bar';
import QuestionList from '@/components/klist/question-list';
import Header from '@/components/klist/header';
import { Suspense } from 'react';

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl p-4">
      <Header />

      {/* Add bg-white/80 backdrop-blur-sm for better visibility when sticky */}
      <div className="sticky top-0 py-3.5 px-4 z-10 bg-white/80 backdrop-blur-lg border rounded-md mt-2 md:my-3">
        <div className="flex gap-2">
          <ProgressBar />
          <Suspense fallback={<div>Loading...</div>}>
            <FilterBar />
          </Suspense>
        </div>
      </div>

      {/* Add pt-4 to prevent content jump when header becomes sticky */}
      <div className="pt-4">
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
