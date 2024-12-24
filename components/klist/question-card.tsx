'use client';

import { Button } from '@/components/ui/button';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { useIsMobile } from '@/hooks/use-mobile';
import { createToggleCompleted } from '@/lib/actions';
import { cn } from '@/lib/utils';
import YTIcon from '@/public/youtube.webp';
import { CircleCheck } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface QuestionCardProps {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeEstimate: number;
  topics: string[];
  patterns: string[];
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
  patterns,
  leetCodeUrl,
  videoUrl,
  completed: initialCompleted
}: QuestionCardProps) {
  const [completed, setCompleted] = useState(initialCompleted);
  const isMobile = useIsMobile();

  const [, setCompletedQuestions] = useLocalStorage<number[]>('completedQuestions', []);
  const toggleCompleted = createToggleCompleted(setCompletedQuestions);

  const handleToggleCompleted = async () => {
    const newCompleted = !completed;
    setCompleted(newCompleted);
    toggleCompleted(id, newCompleted);
  };

  useEffect(() => {
    setCompleted(initialCompleted);
  }, [initialCompleted]);

  return (
    <div
      className={cn(
        'group flex items-center gap-1.5 md:gap-3 rounded-lg border py-3 px-2 transition-colors cursor-pointer',
        'transition-all ease-in-out duration-75 hover:scale-[99%] active:scale-[97%]',
        completed ? 'bg-green-50 opacity-75' : ' bg-white hover:bg-muted/[.99]'
      )}
      onClick={handleToggleCompleted}
    >
      {/* Status & Number */}
      <div className="flex items-center">
        <button className={cn('hover:text-primary transition-colors', completed ? 'text-green-500' : '')}>
          <CircleCheck
            className={cn(
              'w-9 h-9 md:w-10 md:h-10',
              completed ? 'text-white fill-green-400' : 'text-white fill-[#ccc]'
            )}
          />
        </button>
      </div>

      {/* Question Info */}
      <div className="flex flex-1 items-center justify-between flex-wrap">
        <div className="flex flex-col gap-1">
          <h3 className="font-medium leading-none flex gap-1 items-center">
            <span className="">{id}.</span>
            <a href={leetCodeUrl} target="_blank" rel="noopener noreferrer" className="flex gap-1 items-center">
              <span className="sr-only">Open in LeetCode</span>
              <span
                className={cn('text-sm md:text-lg max-w-52 truncate', completed ? 'text-gray-600' : 'text-blue-600')}
              >
                {title.replace('Lowest Common Ancestor', 'LCA')}
              </span>
              {/* <SquareArrowOutUpRight size={12} /> */}
            </a>
          </h3>
          <div className="flex flex-wrap items-center text-[10px] md:text-xs">
            <span
              className={`
              ${difficulty === 'Easy' ? 'text-green-600' : ''}
              ${difficulty === 'Medium' ? 'text-yellow-600' : ''}
              ${difficulty === 'Hard' ? 'text-red-600' : ''}
            `}
            >
              {difficulty}
            </span>
            <span className="text-muted-foreground mx-0.5 md:mx-2">•</span>
            <span className="text-muted-foreground">{timeEstimate}min</span>
            <div className="flex flex-wrap gap-0.5 md:gap-2 ml-1 md:ml-2">
              {topics.map((topic, index) => (
                <div key={index} className="flex gap-0.5">
                  <span className="text-muted-foreground">•</span>
                  <span key={topic} className="text-[10px] md:text-xs text-muted-foreground">
                    {topic === 'Dynamic Programming' ? 'DP' : topic}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-0.5 md:gap-2 ml-1 md:ml-2">
              {patterns.map((pattern, index) =>
                topics.includes(pattern) ? null : (
                  <div key={index} className="flex gap-0.5 md:gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span className="text-[10px] md:text-xs text-muted-foreground">
                      {isMobile
                        ? pattern
                            .replace(/Dynamic Programming/g, 'DP')
                            .replace(/Depth-First Search \(DFS\)/g, 'DFS')
                            .replace(/Depth First Search \(DFS\)/g, 'DFS')
                            .replace(/Breadth-First Search \(BFS\)/g, 'BFS')
                            .replace(/Breadth First Search \(BFS\)/g, 'BFS')
                            .replace(/ and /g, ' & ')
                            .replace(/String Manipulation/g, 'String Ops')
                        : pattern}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 w-8 md:w-fit justify-center md:mr-2">
          {videoUrl && (
            <Button
              variant={'ghost'}
              size="icon"
              asChild
              className={cn(
                'h-9 w-fit shadow-none md:p-2 hover:bg-red-100',
                completed ? 'bg-transparent border-0' : ''
              )}
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
