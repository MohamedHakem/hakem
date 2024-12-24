'use client';

import { getCompletedQuestions } from '@/lib/completed-klist-questions';
import { getQuestions } from '@/lib/klist-questions';
import QuestionCard from '@/components/klist/question-card';
import { useParams, useSearchParams } from 'next/navigation';
import { useLocalStorage } from '@/hooks/use-local-storage';

type QuestionListProps = {
  sortBy: string;
  level: string;
  hideCompleted: boolean;
};

// export default function QuestionList({ sortBy, level, hideCompleted }: QuestionListProps) {
//   console.log('🚀 ~ QuestionList ~ hideCompleted:', hideCompleted);
//   console.log('🚀 ~ QuestionList ~ level:', level);
//   console.log('🚀 ~ QuestionList ~ sortBy:', sortBy);

export default function QuestionList() {
  const params = useParams();
  console.log('🚀 ~ QuestionList ~ params:', params);

  const searchParams = useSearchParams();
  console.log('🚀 ~ QuestionList ~ searchParams:', searchParams);

  const groupBy = searchParams.get('groupBy') || 'default';
  console.log("🚀 ~ QuestionList ~ groupBy:", groupBy)
  const sortBy = searchParams.get('sortBy') || 'default';
  console.log('🚀 ~ QuestionList ~ sortBy:', sortBy);
  const level = searchParams.get('level') || 'all';
  console.log('🚀 ~ QuestionList ~ level:', level);
  const hideCompleted = searchParams.get('hideCompleted') === 'true';
  console.log('🚀 ~ QuestionList ~ hideCompleted:', hideCompleted);

  const questions = getQuestions();
  const completedQuestions = getCompletedQuestions();
  console.log('🚀 ~ QuestionList ~ completedQuestions:', completedQuestions);

  const [completedQuestionsFromLS, setCompletedQuestions] = useLocalStorage<number[]>('completedQuestions', []);
  console.log('🚀 ~ QuestionList ~ completedQuestionsFromLS:', completedQuestionsFromLS);

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
