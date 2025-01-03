import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import VaulDrawer from '@/components/vaul-drawer';
import { klistQuestionsTopics } from '@/lib/data';
import { Filter } from 'lucide-react';
import { MouseEvent, useState } from 'react';

export function TopicsFilter() {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const handleSetQuestionTopic = (e: MouseEvent<HTMLLIElement>) => {
    const topic = (e.target as HTMLElement).innerText;
    if (selectedTopics.includes(topic)) {
      setSelectedTopics((prev) => prev.filter((t) => t !== topic));
    } else {
      setSelectedTopics((prev) => [...prev, topic]);
    }
  };

  // () => {
  //   const isSelected = selectedTopics.includes(topic);
  //   setSelectedTopics((prev) => (isSelected ? prev.filter((t) => t !== topic) : [...prev, topic]));
  // }

  return (
    <div className="flex flex-wrap rounded-md">
      <VaulDrawer
        triggerClassName="shadow-none bg-transparent"
        trigger={
          <div
            className="flex items-center justify-center rounded-md border border-input px-2 py-1 text-xs h-10 overflow-hidden 
            bg-background hover:bg-accent hover:text-accent-foreground shadow-none gap-0.5"
          >
            <Filter className="h-4 w-4" />
            Topics
          </div>
        }
        title={
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Select Topics</h4>
            <p className="text-sm text-muted-foreground">Choose the topics you want to focus on.</p>
          </div>
        }
        content={
          <ScrollArea
            className="max-h-96 bg-transparent border-t whitespace-pre-wrap overflow-y-hidden"
            longContent={true}
          >
            <div>
              <ul className="grid grid-cols-1 gap-1.5 md:gap-2 py-4 text-midsm text-zinc-600 overflow-y-scroll overflow-x-hidden w-full scroll-smooth scrollbar-hidden">
                {klistQuestionsTopics.map((topic, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 rounded-lg bg-[#e0e0e060] p-3 md:p-3 w-full overflow-hidden cursor-pointer
                      transition-all ease-in-out duration-100 hover:scale-[.98] focus:scale-[.96]"
                    onClick={handleSetQuestionTopic}
                  >
                    <Checkbox
                      id={topic}
                      checked={selectedTopics.includes(topic)}
                      onChange={() => {}}
                      className="cursor-pointer"
                      // className="hidden"
                    />
                    <Label htmlFor={topic} className="flex-grow cursor-pointer">
                      {topic}
                    </Label>
                  </li>
                ))}
              </ul>
            </div>

            {/* <div className="grid gap-4">
              <div className="grid gap-1 py-2">
                <ul className="grid grid-cols-1 gap-1.5 md:gap-2 py-4 text-midsm text-zinc-600 overflow-y-scroll overflow-x-hidden w-full scroll-smooth scrollbar-hidden">
                  {klistQuestionsTopics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-center gap-2 rounded-lg bg-[#e0e0e060] px-2.5 py-1 md:py-1.5 w-full overflow-hidden"
                    >
                      <Checkbox
                        id={topic}
                        checked={selectedTopics.includes(topic)}
                        onCheckedChange={(checked) => {
                          setSelectedTopics((prev) => (checked ? [...prev, topic] : prev.filter((t) => t !== topic)));
                        }}
                        className="absolute h-full opacity-0 cursor-pointer"
                      />
                      <Label htmlFor={topic}>{topic}</Label>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
          </ScrollArea>
        }
      />
    </div>
  );
}
