'use client';

import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { toggleCompleted } from '@/lib/actions';
import { cn } from '@/lib/utils';
import YTIcon from '@/public/youtube.webp';
import { CircleCheck, SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
// import { LeetcodeIcon } from '../icons/leetcode-icon';

interface QuestionCardProps {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeEstimate: number;
  topics: string[];
  leetCodeUrl: string;
  videoUrl?: string;
  completed: boolean;
}

export default function QuestionCard({
  id,
  title,
  difficulty,
  timeEstimate,
  topics,
  leetCodeUrl,
  videoUrl,
  completed: initialCompleted
}: QuestionCardProps) {
  const [completed, setCompleted] = useState(initialCompleted);

  const isMobile = useIsMobile();

  const handleToggleCompleted = async () => {
    const newCompleted = !completed;
    setCompleted(newCompleted);
    await toggleCompleted(id, newCompleted);
  };

  return (
    <div
      className={cn(
        'group flex items-center gap-3 rounded-lg border py-3 px-2 transition-colors cursor-pointer',
        'transition-all ease-in-out duration-100 hover:scale-[99%] active:scale-[97%]',
        completed ? 'bg-green-50 opacity-75' : ' bg-white hover:bg-muted/95'
      )}
      onClick={handleToggleCompleted}
    >
      {/* Status & Number */}
      <div className="flex items-center gap-3">
        <button className={cn('hover:text-primary transition-colors', completed ? 'text-green-500' : '')}>
          <CircleCheck className={cn('w-8 h-8', completed ? 'text-white fill-green-400' : 'text-white fill-[#ccc]')} />
        </button>
      </div>

      {/* Question Info */}
      <div className="flex flex-1 items-center justify-between flex-wrap">
        <div className="flex flex-col gap-1">
          <h3 className="font-medium leading-none flex gap-1 items-center">
            <span className="">{id}.</span>
            {/* <Button variant="outline" size="icon" asChild className="h-8 w-fit px-2 py-1 font-normal"> */}
            <a href={leetCodeUrl} target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center">
              <span className="sr-only">Open in LeetCode</span>
              {/* <span className="hidden md:flex">Solve</span> */}
              <span className="text-sm md:text-lg">{title}</span>
              {/* <LeetcodeIcon /> */}
              <SquareArrowOutUpRight size={12} />
            </a>
            {/* </Button> */}
          </h3>
          <div className="flex flex-wrap items-center text-xs">
            <span
              className={`
              ${difficulty === 'Easy' ? 'text-green-600' : ''}
              ${difficulty === 'Medium' ? 'text-yellow-600' : ''}
              ${difficulty === 'Hard' ? 'text-red-600' : ''}
            `}
            >
              {difficulty}
            </span>
            <span className="text-muted-foreground mx-2">•</span>
            <span className="text-muted-foreground">{timeEstimate} min</span>
            <div className="flex flex-wrap gap-1 ml-1">
              {topics.map((topic) => (
                <div className="flex gap-1">
                  <span className="text-muted-foreground mx-1">•</span>
                  <span key={topic} className="text-xs text-muted-foreground">
                    {topic === 'Dynamic Programming' ? (isMobile ? 'DP' : 'Dynamic Programming') : topic}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 mr-2">
          {/* <Button variant="outline" size="icon" asChild className="h-8 w-fit px-2 py-1 font-normal">
            <a href={leetCodeUrl} target="_blank" rel="noopener noreferrer" className="flex gap-1">
              <span className="sr-only">Open in LeetCode</span>
              <LeetcodeIcon />
              <span className="hidden md:flex">Solve</span>
            </a>
          </Button> */}
          {videoUrl && (
            <Button
              variant="outline"
              size="icon"
              asChild
              className={cn('h-9 w-fit p-1 md:p-2 hover:bg-red-100', completed ? 'bg-transparent border-0' : '')}
            >
              <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Watch video solution</span>
                <Image
                  src={YTIcon}
                  alt={videoUrl}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full flex-shrink-0"
                />
                <span className="hidden md:flex">Watch</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
