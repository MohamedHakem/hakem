import { useState, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import useMediaQuery from '@/hooks/use-media-query';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ChevronsUpDown, FilterIcon } from 'lucide-react';

// Update with your actual topics
// const klistQuestionsTopics = ['Arrays', 'Strings', 'DP', 'Trees'];

interface TopicsCommandContentProps {
  selectedTopics: string[];
  isAllSelected: boolean;
  handleSelectAll: () => void;
  handleDeselectAll: () => void;
  handleTopicToggle: (topic: string) => void;
  topics: string[];
}

export default function TopicsFilter({ topics }: { topics: string[] }) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const searchParams = useSearchParams();
  const router = useRouter();

  const topicsParam = searchParams.get('topics');
  const selectedTopics = useMemo(() => {
    if (topicsParam === 'none') return [];
    if (!topicsParam) return [...topics];
    return topicsParam.split(',').filter(Boolean);
  }, [topicsParam, topics]);

  const isAllSelected = selectedTopics.length === topics.length;

  const updateSearchParams = (key: string, value: string | null) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set('list', 'custom');
    if (value === null) {
      current.delete(key);
    } else {
      current.set(key, value);
    }
    router.push(`?${current.toString()}`);
  };

  const handleTopicToggle = (topic: string) => {
    const newTopics = selectedTopics.includes(topic)
      ? selectedTopics.filter((t) => t !== topic)
      : [...selectedTopics, topic];

    if (newTopics.length === 0) {
      updateSearchParams('topics', 'none');
    } else if (newTopics.length < topics.length) {
      updateSearchParams('topics', newTopics.join(','));
    } else {
      updateSearchParams('topics', null);
    }
  };

  const handleSelectAll = () => {
    updateSearchParams('topics', null);
    // setOpen(false);
  };

  const handleDeselectAll = () => {
    updateSearchParams('topics', 'none');
    // setOpen(false);
  };

  const triggerButton = (
    <Button variant="outline" className="flex items-center gap-1 px-3">
      <FilterIcon className="lucide lucide-list-filter size-4 shrink-0" />
      Topics
      {/* {selectedTopics.length > 0 && ( */}
      <span className="ml-1 rounded-full bg-primary/10 px-1.5 py-0.5 text-xs">{selectedTopics.length}</span>
      {/* )} */}
      <ChevronsUpDown className="ml-1 h-4 w-4 shrink-0 opacity-50" />
    </Button>
  );

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>{triggerButton}</PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
          <TopicsCommandContent
            selectedTopics={selectedTopics}
            isAllSelected={isAllSelected}
            handleSelectAll={handleSelectAll}
            handleDeselectAll={handleDeselectAll}
            handleTopicToggle={handleTopicToggle}
            topics={topics}
          />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{triggerButton}</DrawerTrigger>
      <DrawerContent className="">
        <DrawerHeader>
          <DrawerTitle>Choose Topics</DrawerTitle>
        </DrawerHeader>
        <div className="mt-4 border-t">
          <TopicsCommandContent
            selectedTopics={selectedTopics}
            isAllSelected={isAllSelected}
            handleSelectAll={handleSelectAll}
            handleDeselectAll={handleDeselectAll}
            handleTopicToggle={handleTopicToggle}
            topics={topics}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function TopicsCommandContent({
  selectedTopics,
  isAllSelected,
  handleSelectAll,
  handleDeselectAll,
  handleTopicToggle,
  topics
}: TopicsCommandContentProps) {
  return (
    <Command>
      <CommandInput placeholder="Search topics..." />
      <div className="border-b p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Checkbox
              id="select-all"
              checked={isAllSelected}
              onCheckedChange={(checked) => {
                if (checked) handleSelectAll();
                else handleDeselectAll();
              }}
            />
            <Label htmlFor="select-all">Select All</Label>
          </div>
          <span className="text-xs text-muted-foreground">
            {selectedTopics.length}/{topics.length}
          </span>
        </div>
      </div>
      <CommandList>
        <CommandEmpty>No topic found.</CommandEmpty>
        <CommandGroup>
          {topics.map((topic, index) => (
            <CommandItem key={index} onSelect={() => handleTopicToggle(topic)} className="cursor-pointer py-2 border-b">
              <Checkbox checked={selectedTopics.includes(topic)} className="mr-2" />
              {topic}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
