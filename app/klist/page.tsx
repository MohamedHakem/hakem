import { Suspense } from 'react';
// import { Header } from '@/components/klist/header';
// import SearchDrawer from '@/components/klist/search-drawer';
import { FilterBar } from '@/components/klist/filter-bar';
import ProgressBar from '@/components/klist/progress-bar';
import { QuestionList } from '@/components/klist/question-list';
import { cookies } from 'next/headers';

type SearchParams = Promise<{ [key: string]: string | undefined }>;

export default async function Page(props: { searchParams: SearchParams }) {
  const {
    status = 'all',
    search = '',
    sortBy = 'default',
    level = 'all',
    hideCompleted = 'false'
  } = await props.searchParams;

  const streak = await getStreak();

  return (
    <div className="mx-auto max-w-4xl p-4">
      {/* <Header /> */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Klist 75</h1>
        <div className="flex items-center gap-4 text-sm">
          <Suspense fallback={<div>Loading progress...</div>}>
            <ProgressBar hideOnMobile />
          </Suspense>
          <span className="font-medium flex-shrink-0 px-2 py-1 md:border rounded-md">
            🔥 {streak} day{streak > 1 ? 's' : ''} streak
          </span>
        </div>
      </div>

      <div className="my-4 flex gap-2">
        <Suspense fallback={<div>Loading progress...</div>}>
          <ProgressBar />
        </Suspense>
        <FilterBar status={status} sortBy={sortBy as string} level={level} hideCompleted={hideCompleted === 'true'} />
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <QuestionList
          status={status}
          search={search}
          sortBy={sortBy}
          level={level}
          hideCompleted={hideCompleted === 'true'}
        />
      </Suspense>

      {/* <SearchDrawer /> */}
    </div>
  );
}

async function getStreak(): Promise<number> {
  const cookieStore = await cookies();
  const streakCookie = cookieStore.get('streak');
  const lastStudyDateCookie = cookieStore.get('lastStudyDate');

  const streak = streakCookie ? parseInt(streakCookie.value) : 0;
  const lastStudyDate = lastStudyDateCookie ? new Date(lastStudyDateCookie.value) : null;

  const today = new Date();
  if (lastStudyDate && lastStudyDate.toDateString() === today.toDateString()) {
    return streak;
  } else if (lastStudyDate && lastStudyDate.toDateString() === new Date(today.getTime() - 86400000).toDateString()) {
    return streak + 1;
  } else {
    return 1;
  }
}
