'use client';

import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useRouter, useSearchParams } from 'next/navigation';
import { TopicsFilter } from './topics-filter';

interface FilterBarProps {
  status: string;
  sortBy: string;
  level: string;
  hideCompleted: boolean;
}

export function FilterBar({ status, sortBy, level, hideCompleted = false }: FilterBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateSearchParams = (key: string, value: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set(key, value);
    router.push(`?${current.toString()}`);
  };

  return (
    <div className="flex flex-wrap items-center gap-2 text-sm">
      <Select defaultValue="all" value={status} onValueChange={(value) => updateSearchParams('status', value)}>
        <SelectTrigger className="w-[120px] px-2 py-1 md:px-3 md:py-2 md:w-[130px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Questions</SelectItem>
          <SelectItem value="todo">To Do</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
        </SelectContent>
      </Select>

      <TopicsFilter />

      <Select value={sortBy} onValueChange={(value) => updateSearchParams('sortBy', value)}>
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="default">Recommended</SelectItem>
          <SelectItem value="difficulty">Difficulty</SelectItem>
          <SelectItem value="timeEstimate">Time Estimate</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="all" value={level} onValueChange={(value) => updateSearchParams('level', value)}>
        <SelectTrigger className="w-[105px]">
          <SelectValue placeholder="Difficulty" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Levels</SelectItem>
          <SelectItem value="easy">Easy</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="hard">Hard</SelectItem>
        </SelectContent>
      </Select>

      <Button
        variant="outline"
        size="sm"
        className="h-9"
        onClick={() => updateSearchParams('hideCompleted', hideCompleted ? 'false' : 'true')}
      >
        {hideCompleted ? 'Show Completed' : 'Hide Completed'}
      </Button>
    </div>
  );
}
