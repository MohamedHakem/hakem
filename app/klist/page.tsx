import { Suspense } from 'react';
import { Header } from '@/components/klist/header';
import SearchDrawer from '@/components/klist/search-drawer';
import { FilterBar } from '@/components/klist/filter-bar';
import { QuestionList } from '@/components/klist/question-list';
import ProgressBar from '@/components/klist/progress-bar';

type SearchParams = Promise<{ [key: string]: string | undefined }>;

export default async function Page(props: { searchParams: SearchParams }) {
  const {
    status = 'all',
    search = '',
    sortBy = 'default',
    level = 'all',
    hideCompleted = 'false'
  } = await props.searchParams;

  return (
    <div className="mx-auto max-w-4xl p-4">
      <Header />

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
