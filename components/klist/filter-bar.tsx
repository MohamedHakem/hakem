'use client';

import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SlidersHorizontal } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Drawer, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from '../ui/drawer-original';
import { Switch } from '../ui/switch';
import { TopicsFilter } from './topics-filter';

// interface FilterBarProps {
//   sortBy: string;
//   level: string;
//   hideCompleted: boolean;
// }

// export function FilterBar({ sortBy, level, hideCompleted = false }: FilterBarProps) {
export function FilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const groupBy = searchParams.get('groupBy') || 'default';
  // console.log("🚀 ~ FilterBar ~ groupBy:", groupBy)
  // const sortBy = searchParams.get('sortBy') || 'default';
  // console.log("🚀 ~ FilterBar ~ sortBy:", sortBy)
  const level = searchParams.get('level') || 'all';
  // console.log("🚀 ~ FilterBar ~ level:", level)
  const hideCompleted = searchParams.get('hideCompleted') === 'true';
  // console.log("🚀 ~ FilterBar ~ hideCompleted:", hideCompleted)

  const updateSearchParams = (key: string, value: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set(key, value);
    router.push(`?${current.toString()}`);
  };

  return (
    <div className="">
      <div className="flex md:hidden">
        <Drawer>
          <DrawerTrigger
            className="h-[38px] px-2 py-1.5 rounded-md select-none text-sm flex items-center justify-center gap-2 border bg-white text-primary hover:bg-white/80
          transition-transform duration-50 ease-in-out transform hover:scale-90"
          >
            <SlidersHorizontal size={16} />
            Filters
          </DrawerTrigger>
          <DrawerContent>
            <DrawerTitle />
            <DrawerDescription />
            <div className="p-4 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium">Questions</h3>
                <div
                  className="flex justify-between items-center rounded-lg border px-3 py-2 shadow-sm"
                  onClick={() => updateSearchParams('hideCompleted', hideCompleted ? 'false' : 'true')}
                >
                  <p>Show topics</p>
                  <Switch
                    checked={hideCompleted}
                    onCheckedChange={() => updateSearchParams('hideCompleted', hideCompleted ? 'false' : 'true')}
                  />
                </div>
                <div
                  className="flex justify-between items-center rounded-lg border px-3 py-2 shadow-sm"
                  onClick={() => updateSearchParams('hideCompleted', hideCompleted ? 'false' : 'true')}
                >
                  <p>Show pattern</p>
                  <Switch
                    checked={hideCompleted}
                    onCheckedChange={() => updateSearchParams('hideCompleted', hideCompleted ? 'false' : 'true')}
                  />
                </div>
                <div
                  className="flex justify-between items-center rounded-lg border px-3 py-2 shadow-sm"
                  onClick={() => updateSearchParams('hideCompleted', hideCompleted ? 'false' : 'true')}
                >
                  <p>Show Dynamic Programming DP</p>
                  <Switch
                    checked={hideCompleted}
                    onCheckedChange={() => updateSearchParams('hideCompleted', hideCompleted ? 'false' : 'true')}
                  />
                </div>
                <div
                  className="flex justify-between items-center rounded-lg border px-3 py-2 shadow-sm"
                  onClick={() => updateSearchParams('hideCompleted', hideCompleted ? 'false' : 'true')}
                >
                  <p>Show completed</p>
                  <Switch
                    checked={hideCompleted}
                    onCheckedChange={() => updateSearchParams('hideCompleted', hideCompleted ? 'false' : 'true')}
                  />
                </div>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      {/* hide on mobile */}
      <div className="hidden md:flex flex-wrap items-center gap-2 text-sm">
        <TopicsFilter />

        <Select defaultValue="default" value={groupBy} onValueChange={(value) => updateSearchParams('groupBy', value)}>
          <SelectTrigger className="w-[110px]">
            <SelectValue defaultValue="default" placeholder="Group By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Group By</SelectItem>
            <SelectItem value="pattern">Pattern</SelectItem>
            <SelectItem value="company">Company</SelectItem>
            <SelectItem value="topic">Topic</SelectItem>
            <SelectItem value="difficulty">Difficulty</SelectItem>
          </SelectContent>
        </Select>

        {/* <Select value={sortBy} onValueChange={(value) => updateSearchParams('sortBy', value)}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Recommended</SelectItem>
            <SelectItem value="difficulty">Difficulty</SelectItem>
          </SelectContent>
        </Select> */}

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
    </div>
  );
}
