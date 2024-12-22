import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer-original';
import { Filter } from 'lucide-react';
import { klistQuestionsTopics } from '@/lib/data';
import { useState } from 'react';

interface TopicsFilterProps {
  isMobile: boolean;
}

export default function TopicsFilter({ isMobile }: TopicsFilterProps) {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const content = (
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Select Topics</h4>
        <p className="text-sm text-muted-foreground">Choose the topics you want to focus on.</p>
      </div>
      <div className="grid gap-2">
        {klistQuestionsTopics.map((topic) => (
          <div key={topic} className="flex items-center space-x-2">
            <Checkbox
              id={topic}
              checked={selectedTopics.includes(topic)}
              onCheckedChange={(checked) => {
                setSelectedTopics((prev) => (checked ? [...prev, topic] : prev.filter((t) => t !== topic)));
              }}
            />
            <Label htmlFor={topic}>{topic}</Label>
          </div>
        ))}
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" size="sm" className="h-9">
            <Filter className="mr-2 h-4 w-4" />
            Topics
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="p-4">{content}</div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-9">
          <Filter className="mr-2 h-4 w-4" />
          Topics
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 max-h-[400px] overflow-y-auto">{content}</PopoverContent>
    </Popover>
  );
}
