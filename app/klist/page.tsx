import { Suspense } from 'react';
// import { Header } from '@/components/klist/header';
// import SearchDrawer from '@/components/klist/search-drawer';
import { FilterBar } from '@/components/klist/filter-bar';
import { QuestionList } from '@/components/klist/question-list';
import ProgressBar from '@/components/klist/progress-bar';
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
        <h1 className="text-xl font-semibold">Klist 75</h1>
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium">🔥 {streak} day streak</span>
        </div>
      </div>

      <Suspense fallback={<div>Loading progress...</div>}>
        <ProgressBar />
      </Suspense>

      <div className="my-6">
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
