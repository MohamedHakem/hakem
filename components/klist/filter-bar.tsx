'use client';

import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronsUpDown, SlidersHorizontal } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Drawer, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from '../ui/drawer-original';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Switch } from '../ui/switch';
import TopicsFilter from './topics-filter';
import { MouseEvent, useMemo, useState } from 'react';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { klistQuestionsCompanies, klistQuestionsPatterns, klistQuestionsTopics } from '@/lib/data';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import FilterIcon from '../icons/filter-icon';
import { ScrollArea } from '../ui/scroll-area';
import useMediaQuery from '@/hooks/use-media-query';
import PatternsFilter from './pattern-filter';
import CompaniesFilter from './company-filter';

export function FilterBar() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get topics from URL, default to all if param doesn't exist
  const topicsParam = searchParams.get('topics');
  const selectedTopics = useMemo(() => {
    if (topicsParam === 'none') return [];
    if (!topicsParam) return [...klistQuestionsTopics];
    return topicsParam.split(',').filter(Boolean);
  }, [topicsParam]);

  console.log('🚀 ~ FilterBar ~ topicsParam:', topicsParam);
  // const selectedTopics = topicsParam ? topicsParam.split(',') : [...klistQuestionsTopics];

  // const selectedTopics =
  //   topicsParam === 'none' || topicsParam === null
  //     ? [] // No topics selected
  //     : topicsParam
  //     ? topicsParam.split(',').filter(Boolean)
  //     : [...klistQuestionsTopics]; // Default: all selected

  console.log(
    '🚀 ~ FilterBar ~ selectedTopics: ',
    selectedTopics.length,
    ', ~ klistQuestionsTopics: ',
    klistQuestionsTopics.length
  );

  // const updateTopics = (topic: string) => {
  //   console.log('🚀 ~ updateTopics ~ topic:', topic);
  //   const params = new URLSearchParams(searchParams.toString());
  //   let newTopics = [...selectedTopics];

  //   if (selectedTopics.includes(topic)) {
  //     newTopics = newTopics.filter((t) => t !== topic);
  //   } else {
  //     newTopics.push(topic);
  //   }

  //   // Only set URL param if some topics are unselected
  //   if (newTopics.length < klistQuestionsTopics.length) {
  //     params.set('topics', newTopics.join(','));
  //   } else {
  //     params.delete('topics'); // All topics selected = default state
  //   }

  //   router.push(`?${params.toString()}`);
  // };

  // const handleTopicToggle = (topic: string) => {
  //   const params = new URLSearchParams(searchParams.toString());
  //   const newTopics = selectedTopics.includes(topic)
  //     ? selectedTopics.filter((t) => t !== topic)
  //     : [...selectedTopics, topic];

  //   if (newTopics.length < klistQuestionsTopics.length) {
  //     params.set('topics', newTopics.join(','));
  //   } else {
  //     params.delete('topics');
  //   }

  //   router.push(`?${params.toString()}`);
  // };

  const handleTopicToggle = (topic: string) => {
    const newTopics = selectedTopics.includes(topic)
      ? selectedTopics.filter((t) => t !== topic)
      : [...selectedTopics, topic];

    if (newTopics.length === 0) {
      updateSearchParams('topics', 'none');
    } else if (newTopics.length < klistQuestionsTopics.length) {
      updateSearchParams('topics', newTopics.join(','));
    } else {
      updateSearchParams('topics', null);
    }
  };

  const handleSelectAll = () => {
    console.log('🚀 ~ handleSelectAll ~ handleSelectAll ~');

    updateSearchParams('topics', null);

    // const params = new URLSearchParams(searchParams.toString());
    // params.delete('topics'); // Remove param to indicate all selected
    // router.push(`?${params.toString()}`);
    // setOpen(false);
  };

  const handleDeselectAll = () => {
    console.log('🚀 ~ handleDeselectAll ~ handleDeselectAll ~');

    updateSearchParams('topics', 'none');

    // const params = new URLSearchParams(searchParams.toString());
    // params.set('topics', 'none'); // Empty string means none selected
    // router.push(`?${params.toString()}`);
    // setOpen(false);
  };

  // const isAllSelected = selectedTopics.length === klistQuestionsTopics.length;

  const groupBy = searchParams.get('groupBy') || 'default';
  const level = searchParams.get('level') || 'all';
  const showCompleted = searchParams.get('showCompleted') === 'true' || false;
  const showTopics = searchParams.get('showTopics') === 'true' || false;
  const showPatterns = searchParams.get('showPatterns') === 'true' || false;
  const showCompanies = searchParams.get('showCompanies') === 'true' || false;

  // const updateSearchParams = (key: string, value: string) => {
  //   const current = new URLSearchParams(Array.from(searchParams.entries()));
  //   current.set(key, value);
  //   router.push(`?${current.toString()}`);
  // };

  const updateSearchParams = (key: string, value: string | null) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    // Always set custom list when updating filters
    current.set('list', 'custom');

    // Handle the filter value
    if (value === null) {
      current.delete(key);
    } else {
      current.set(key, value);
    }

    router.push(`?${current.toString()}`);
  };

  // const triggerButton = (
  //   <Button variant="outline" className="flex items-center gap-2">
  //     <FilterIcon className="lucide lucide-list-filter size-4 shrink-0" />
  //     Topics
  //     {selectedTopics.length > 0 && (
  //       <span className="ml-1 rounded-full bg-primary/10 px-1.5 py-0.5 text-xs">{selectedTopics.length}</span>
  //     )}
  //     <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
  //   </Button>
  // );

  // const pickTopics = (
  //   <Popover open={open} onOpenChange={setOpen}>
  //     <PopoverTrigger asChild>
  //       {/* <Button variant="outline" role="combobox" aria-expanded={open} className="flex items-center gap-2">
  //         <FilterIcon className="lucide lucide-list-filter size-4 shrink-0" />
  //         Topics
  //         {selectedTopics.length > 0 && (
  //           <span className="ml-1 rounded-full bg-primary/10 px-1.5 py-0.5 text-xs">{selectedTopics.length}</span>
  //         )}
  //         <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
  //       </Button> */}
  //       {triggerButton}
  //     </PopoverTrigger>

  //     <PopoverContent className="w-[300px] p-0">
  //       <Command>
  //         <CommandInput placeholder="Search topics..." />
  //         <div className="border-b p-2">
  //           <div className="flex items-center justify-between">
  //             <div className="flex items-center gap-2 cursor-pointer">
  //               <Checkbox
  //                 id="select-all"
  //                 checked={isAllSelected}
  //                 onCheckedChange={(checked) => {
  //                   if (checked) handleSelectAll();
  //                   else handleDeselectAll();
  //                 }}
  //                 className=""
  //               />
  //               <Label htmlFor="select-all cursor-pointer">Select All</Label>
  //             </div>
  //             <span className="ml-auto text-xs text-muted-foreground">
  //               {selectedTopics.length}/{klistQuestionsTopics.length}
  //             </span>
  //           </div>
  //         </div>
  //         <CommandList>
  //           <CommandEmpty>No topic found.</CommandEmpty>

  //           <CommandGroup>
  //             {klistQuestionsTopics.map((topic, index) => (
  //               <CommandItem key={index} onSelect={() => handleTopicToggle(topic)} className="cursor-pointer">
  //                 <Checkbox checked={selectedTopics.includes(topic)} className="mr-2" />
  //                 {topic}
  //               </CommandItem>
  //             ))}
  //           </CommandGroup>
  //         </CommandList>
  //       </Command>
  //     </PopoverContent>
  //   </Popover>
  // );

  return (
    <div className="">
      <div className="flex md:hidden">
        <Drawer>
          <DrawerTrigger
            className="h-[38px] px-2 py-1.5 rounded-md select-none text-sm flex items-center justify-center 
            gap-2 border bg-white text-primary hover:bg-white/80 transition-transform duration-50 ease-in-out transform hover:scale-90"
          >
            <SlidersHorizontal size={16} />
            Filters
          </DrawerTrigger>
          <DrawerContent className="h-[90dvh]">
            <DrawerTitle />
            <DrawerDescription />
            <div className="p-4 flex flex-col gap-4">
              <div className="flex flex-col gap-2 items-center">
                {/* {pickTopics} */}
                <div className="flex w-full justify-between items-center">
                  <span>Choose Topics:</span>
                  <TopicsFilter topics={klistQuestionsTopics} />
                </div>
                <div className="flex w-full justify-between items-center">
                  Choose Patterns: <PatternsFilter patterns={klistQuestionsPatterns} />
                </div>
                <div className="flex w-full justify-between items-center">
                  Choose Companies: <CompaniesFilter companies={klistQuestionsCompanies} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium">Questions</h3>
                <div
                  className="flex justify-between items-center rounded-lg border px-3 py-2 shadow-sm"
                  onClick={() => updateSearchParams('showCompleted', showCompleted ? 'false' : 'true')}
                >
                  <p>Show topics</p>
                  <Switch
                    checked={showCompleted}
                    onCheckedChange={() => updateSearchParams('showCompleted', showCompleted ? 'false' : 'true')}
                  />
                </div>
                <div
                  className="flex justify-between items-center rounded-lg border px-3 py-2 shadow-sm"
                  onClick={() => updateSearchParams('showCompleted', showCompleted ? 'false' : 'true')}
                >
                  <p>Show pattern</p>
                  <Switch
                    checked={showCompleted}
                    onCheckedChange={() => updateSearchParams('showCompleted', showCompleted ? 'false' : 'true')}
                  />
                </div>
                <div
                  className="flex justify-between items-center rounded-lg border px-3 py-2 shadow-sm"
                  onClick={() => updateSearchParams('showCompleted', showCompleted ? 'false' : 'true')}
                >
                  <p>Show Dynamic Programming DP</p>
                  <Switch
                    checked={showCompleted}
                    onCheckedChange={() => updateSearchParams('showCompleted', showCompleted ? 'false' : 'true')}
                  />
                </div>
                <div
                  className="flex justify-between items-center rounded-lg border px-3 py-2 shadow-sm"
                  onClick={() => updateSearchParams('showCompleted', showCompleted ? 'false' : 'true')}
                >
                  <p>Show completed</p>
                  <Switch
                    checked={showCompleted}
                    onCheckedChange={() => updateSearchParams('showCompleted', showCompleted ? 'false' : 'true')}
                  />
                </div>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      {/* hide on mobile */}
      <div className="hidden md:flex items-center gap-1 text-sm md:flex-wrap">
        {/* <TopicsFilter /> */}

        {/* <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <FilterIcon className="lucide lucide-list-filter size-4 shrink-0" />
              Topics
              {selectedTopics.length > 0 && (
                <span className="ml-1 rounded-full bg-primary/10 px-1.5 py-0.5 text-xs">{selectedTopics.length}</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-fit p-0">
            <div className="">
              <div className="flex items-center justify-between p-4 border-b">
                <Checkbox
                  id="select-all"
                  checked={isAllSelected}
                  onCheckedChange={(checked) => {
                    if (checked) handleSelectAll();
                    else handleDeselectAll();
                  }}
                />
                <Label htmlFor="select-all">Select All</Label>
                <span className="text-xs text-muted-foreground">
                  {selectedTopics.length}/{klistQuestionsTopics.length}
                </span>
              </div>
              <ScrollArea className="h-72 px-0 md:max-w-60">
                <ul className="grid gap-1.5 py-4">
                  {klistQuestionsTopics.map((topic, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 rounded-md bg-[#e0e0e060] p-3 md:p-3 w-full overflow-hidden cursor-pointer
                      transition-all ease-in-out duration-100 hover:scale-[.98] focus:scale-[.96]"
                      onClick={() => updateTopics(topic)}
                    >
                      <Checkbox
                        id={topic}
                        checked={selectedTopics.includes(topic)}
                        onChange={() => {}}
                        className="cursor-pointer"
                      />
                      <Label htmlFor={topic} className="flex-grow cursor-pointer">
                        {topic}
                      </Label>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </PopoverContent>
        </Popover> */}

        {/* <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" role="combobox" aria-expanded={open} className="flex items-center gap-2">
              <FilterIcon className="lucide lucide-list-filter size-4 shrink-0" />
              Topics
              {selectedTopics.length > 0 && (
                <span className="ml-1 rounded-full bg-primary/10 px-1.5 py-0.5 text-xs">{selectedTopics.length}</span>
              )}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-[300px] p-0">
            <Command>
              <CommandInput placeholder="Search topics..." />
              <div className="border-b p-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      id="select-all"
                      checked={isAllSelected}
                      onCheckedChange={(checked) => {
                        if (checked) handleSelectAll();
                        else handleDeselectAll();
                      }}
                      className=""
                    />
                    <Label htmlFor="select-all cursor-pointer">Select All</Label>
                  </div>
                  <span className="ml-auto text-xs text-muted-foreground">
                    {selectedTopics.length}/{klistQuestionsTopics.length}
                  </span>
                </div>
              </div>
              <CommandList>
                <CommandEmpty>No topic found.</CommandEmpty>

                <CommandGroup>
                  {klistQuestionsTopics.map((topic, index) => (
                    <CommandItem
                      key={index}
                      onSelect={() => handleTopicToggle(topic)}
                      className="cursor-pointer"
                      // onSelect={() => {
                      //   const params = new URLSearchParams(searchParams.toString());
                      //   let newTopics = [...selectedTopics];

                      //   if (selectedTopics.includes(topic)) {
                      //     newTopics = newTopics.filter((t) => t !== topic);
                      //   } else {
                      //     newTopics.push(topic);
                      //   }

                      //   if (newTopics.length < klistQuestionsTopics.length) {
                      //     params.set('topics', newTopics.join(','));
                      //   } else {
                      //     params.delete('topics');
                      //   }

                      //   router.push(`?${params.toString()}`);
                      // }}
                    >
                      <Checkbox checked={selectedTopics.includes(topic)} className="mr-2" />
                      {topic}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover> */}

        {/* {pickTopics} */}
        <TopicsFilter topics={klistQuestionsTopics} />
        <PatternsFilter patterns={klistQuestionsPatterns} />
        <CompaniesFilter companies={klistQuestionsCompanies} />

        <Select defaultValue="default" value={groupBy} onValueChange={(value) => updateSearchParams('groupBy', value)}>
          <SelectTrigger className="w-fit">
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

        <Select defaultValue="all" value={level} onValueChange={(value) => updateSearchParams('level', value)}>
          <SelectTrigger className="w-fit">
            <SelectValue placeholder="Difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="easy">Easy</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="hard">Hard</SelectItem>
          </SelectContent>
        </Select>

        {/* <Button
          variant="outline"
          size="sm"
          className="h-9"
          onClick={() => updateSearchParams('hideCompleted', hideCompleted ? 'false' : 'true')}
        >
          {hideCompleted ? 'Show Completed' : 'Hide Completed'}
        </Button> */}

        {/* <div
          className="bg-background cursor-pointer hover:bg-accent hover:text-accent-foreground 
          flex justify-between items-center rounded-lg border px-3 py-2 shadow-sm gap-2 bg-white"
          onClick={() => updateSearchParams('hideCompleted', hideCompleted ? 'false' : 'true')}
        >
          <p>Show completed</p>
          <Switch
            checked={hideCompleted}
            onCheckedChange={() => updateSearchParams('hideCompleted', hideCompleted ? 'false' : 'true')}
          />
        </div> */}
        <div
          className="bg-background cursor-pointer hover:bg-accent hover:text-accent-foreground 
          flex justify-between items-center rounded-lg border px-3 py-2 shadow-sm gap-2 bg-white"
          onClick={() => updateSearchParams('showPatterns', showPatterns ? 'false' : 'true')}
        >
          <p>Show patterns</p>
          <Switch
            checked={showPatterns}
            onCheckedChange={() => updateSearchParams('showPatterns', showPatterns ? 'false' : 'true')}
          />
        </div>
        <div
          className="bg-background cursor-pointer hover:bg-accent hover:text-accent-foreground 
          flex justify-between items-center rounded-lg border px-3 py-2 shadow-sm gap-2 bg-white"
          onClick={() => updateSearchParams('showTopics', showTopics ? 'false' : 'true')}
        >
          <p>Show topics</p>
          <Switch
            checked={showTopics}
            onCheckedChange={() => updateSearchParams('showTopics', showTopics ? 'false' : 'true')}
          />
        </div>
        <div
          className="bg-background cursor-pointer hover:bg-accent hover:text-accent-foreground 
          flex justify-between items-center rounded-lg border px-3 py-2 shadow-sm gap-2 bg-white"
          onClick={() => updateSearchParams('showCompanies', showCompanies ? 'false' : 'true')}
        >
          <p>Show Companies</p>
          <Switch
            checked={showCompanies}
            onCheckedChange={() => updateSearchParams('showCompanies', showCompanies ? 'false' : 'true')}
          />
        </div>
      </div>
    </div>
  );
}
