'use client';

import QuestionCard from '@/components/klist/question-card';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { getQuestions } from '@/lib/klist-questions';
import { useSearchParams } from 'next/navigation';

export default function QuestionList() {
  const searchParams = useSearchParams();
  // const groupBy = searchParams.get('groupBy') || 'default';
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

  return (
    <div className="space-y-2">
      {sortedQuestions.map((question) => (
        <QuestionCard key={question.id} {...question} completed={completedQuestions.includes(question.id)} />
      ))}
    </div>
  );
}
