import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TopicsFilter } from '@/components/klist/topics-filter';

interface FilterBarProps {
  filter: string;
  setFilter: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  onOpenSearch: () => void;
  isMobile: boolean;
}

export default function FilterBar({ filter, setFilter, sortBy, setSortBy, onOpenSearch, isMobile }: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm">
      <Button variant="outline" size="sm" className="w-9 px-0" onClick={onOpenSearch}>
        <Search className="h-4 w-4" />
      </Button>
      <Select value={filter} onValueChange={setFilter}>
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Filter by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Questions</SelectItem>
          <SelectItem value="todo">To Do</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
          <SelectItem value="easy">Easy</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="hard">Hard</SelectItem>
        </SelectContent>
      </Select>
      <TopicsFilter isMobile={isMobile} />
      <Select value={sortBy} onValueChange={setSortBy}>
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="default">Recommended</SelectItem>
          <SelectItem value="difficulty">Difficulty</SelectItem>
          <SelectItem value="timeEstimate">Time Estimate</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
