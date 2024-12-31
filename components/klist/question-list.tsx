'use client';

import QuestionCard from '@/components/klist/question-card';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { getQuestions } from '@/lib/klist-questions';
// import { QuestionItemProps } from '@/lib/types';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

export default function QuestionList() {
  const searchParams = useSearchParams();
  const groupBy = searchParams.get('groupBy') || 'default';
  const sortBy = searchParams.get('sortBy') || 'default';
  const level = searchParams.get('level') || 'all';
  const hideCompleted = searchParams.get('hideCompleted') === 'true';

  const questions = getQuestions();

  const [completedQuestions] = useLocalStorage<number[]>('completedQuestions', []);
  // console.log('🚀 ~ QuestionList ~ completedQuestions:', completedQuestions);

  const filteredQuestions = questions.filter((q) => {
    const matchesLevel = level === 'all' || q.difficulty.toLowerCase() === level.toLowerCase();
    const showQuestion = !hideCompleted || !completedQuestions.includes(q.id);
    return matchesLevel && showQuestion;
  });

  const sortedQuestions = [...filteredQuestions].sort((a, b) => {
    if (sortBy === 'difficulty') {
      const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3 };
      return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
    } else if (sortBy === 'timeEstimate') {
      return a.timeEstimate - b.timeEstimate;
    }
    return a.id - b.id; // Default sorting by ID
  });

  // Add grouping logic
  const groupedQuestions = useMemo(() => {
    if (groupBy === 'default') return { default: sortedQuestions };

    return sortedQuestions.reduce((acc, question) => {
      let groupKey: string;

      switch (groupBy) {
        case 'pattern':
          // Assuming each question can have multiple patterns
          question.patterns.forEach((pattern) => {
            if (!acc[pattern]) acc[pattern] = [];
            acc[pattern].push(question);
          });
          return acc;
        case 'company':
          groupKey = question.companies[0] || 'Other';
          break;
        case 'topic':
          // Assuming each question can have multiple topics
          question.topics.forEach((topic) => {
            if (!acc[topic]) acc[topic] = [];
            acc[topic].push(question);
          });
          return acc;
        case 'difficulty':
          groupKey = question.difficulty;
          break;
        default:
          groupKey = 'default';
      }

      if (!acc[groupKey]) acc[groupKey] = [];
      acc[groupKey].push(question);
      return acc;
    }, {} as Record<string, typeof sortedQuestions>);
  }, [sortedQuestions, groupBy]);

  return (
    <div className="space-y-4">
      {groupBy === 'default' ? (
        <ul className="space-y-2">
          {sortedQuestions.map((question) => (
            <QuestionCard key={question.id} {...question} completed={completedQuestions.includes(question.id)} />
          ))}
        </ul>
      ) : (
        <Accordion type="multiple" className="space-y-4">
          {Object.entries(groupedQuestions).map(([group, questions]) => (
            <AccordionItem key={group} value={group} className="border-0">
              <AccordionTrigger
                className={cn(
                  'text-lg font-semibold capitalize border rounded-lg',
                  'px-4 bg-white',
                  '[&[data-state=open]]:rounded-b-none',
                  '[&[data-state=open]]:border-gray-300',
                  '[&[data-state=closed]]:rounded-lg'
                )}
              >
                {' '}
                <div>
                  {group}
                  <span className="ml-2 text-sm text-muted-foreground">({questions.length})</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pt-10 pb-4 border border-gray-300 rounded-b-lg -mt-6 shadow-sm px-4 bg-white/50">
                  {questions.map((question) => (
                    <QuestionCard
                      key={question.id}
                      {...question}
                      completed={completedQuestions.includes(question.id)}
                    />
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
}
