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

interface PatternsCommandContentProps {
  selectedPatterns: string[];
  isAllSelected: boolean;
  handleSelectAll: () => void;
  handleDeselectAll: () => void;
  handlePatternToggle: (pattern: string) => void;
  patterns: string[];
}

export default function PatternsFilter({ patterns }: { patterns: string[] }) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const searchParams = useSearchParams();
  const router = useRouter();

  const patternsParam = searchParams.get('patterns');
  const selectedPatterns = useMemo(() => {
    if (patternsParam === 'none') return [];
    if (!patternsParam) return [...patterns];
    return patternsParam.split(',').filter(Boolean);
  }, [patternsParam, patterns]);

  const isAllSelected = selectedPatterns.length === patterns.length;

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

  const handlePatternToggle = (pattern: string) => {
    const newPatterns = selectedPatterns.includes(pattern)
      ? selectedPatterns.filter((t) => t !== pattern)
      : [...selectedPatterns, pattern];

    if (newPatterns.length === 0) {
      updateSearchParams('topics', 'none');
    } else if (newPatterns.length < patterns.length) {
      updateSearchParams('patterns', newPatterns.join(','));
    } else {
      updateSearchParams('patterns', null);
    }
  };

  const handleSelectAll = () => {
    updateSearchParams('patterns', null);
    // setOpen(false);
  };

  const handleDeselectAll = () => {
    updateSearchParams('patterns', 'none');
    // setOpen(false);
  };

  const triggerButton = (
    <Button variant="outline" className="flex items-center gap-1 px-3">
      <FilterIcon className="lucide lucide-list-filter size-4 shrink-0" />
      Patterns
      {/* {selectedPatterns.length > 0 && ( */}
      <span className="ml-1 rounded-full bg-primary/10 px-1.5 py-0.5 text-xs">{selectedPatterns.length}</span>
      {/* )} */}
      <ChevronsUpDown className="ml-1 h-4 w-4 shrink-0 opacity-50" />
    </Button>
  );

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>{triggerButton}</PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
          <PatternsCommandContent
            selectedPatterns={selectedPatterns}
            isAllSelected={isAllSelected}
            handleSelectAll={handleSelectAll}
            handleDeselectAll={handleDeselectAll}
            handlePatternToggle={handlePatternToggle}
            patterns={patterns}
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
          <DrawerTitle>Choose Patterns</DrawerTitle>
        </DrawerHeader>
        <div className="mt-4 border-t">
          <PatternsCommandContent
            selectedPatterns={selectedPatterns}
            isAllSelected={isAllSelected}
            handleSelectAll={handleSelectAll}
            handleDeselectAll={handleDeselectAll}
            handlePatternToggle={handlePatternToggle}
            patterns={patterns}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function PatternsCommandContent({
  selectedPatterns,
  isAllSelected,
  handleSelectAll,
  handleDeselectAll,
  handlePatternToggle,
  patterns
}: PatternsCommandContentProps) {
  return (
    <Command>
      <CommandInput placeholder="Search patterns..." />
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
            {selectedPatterns.length}/{patterns.length}
          </span>
        </div>
      </div>
      <CommandList>
        <CommandEmpty>No topic found.</CommandEmpty>
        <CommandGroup>
          {patterns.map((pattern, index) => (
            <CommandItem
              key={index}
              onSelect={() => handlePatternToggle(pattern)}
              className="cursor-pointer py-2 border-b"
            >
              <Checkbox checked={selectedPatterns.includes(pattern)} className="mr-2" />
              {pattern}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
