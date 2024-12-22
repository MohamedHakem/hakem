'use client';

import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useIsMobile } from '@/hooks/use-mobile';
import { SlidersHorizontal } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from '../ui/drawer-original';
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
  const isMobile = useIsMobile();

  const updateSearchParams = (key: string, value: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set(key, value);
    router.push(`?${current.toString()}`);
  };

  const content = (
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

  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger className='h-[38px] px-2 py-1.5 rounded-md text-sm flex items-center justify-center gap-2 border bg-white text-primary hover:bg-white/80'>
          {/* <Button size="sm" className="h-9 bg-white text-inherent active:bg-white/80"> */}
          <SlidersHorizontal size={16} />
          Filters
          {/* </Button> */}
        </DrawerTrigger>
        <DrawerContent>
          <DrawerTitle />
          {content}
        </DrawerContent>
      </Drawer>
    );
  }

  return <>{content}</>;
}
