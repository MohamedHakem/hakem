import { getCompletedQuestions } from '@/lib/completed-klist-questions';
import { getQuestions } from '@/lib/klist-questions';
import QuestionCard from '@/components/klist/question-card';

interface QuestionListProps {
  status: string;
  search: string;
  sortBy: string;
  level: string;
  hideCompleted: boolean;
}

export default async function QuestionList({ status, search, sortBy, level, hideCompleted }: QuestionListProps) {
  const questions = await getQuestions();
  const completedQuestions = await getCompletedQuestions();

  const filteredQuestions = questions.filter((q) => {
    const matchesSearch = q.title.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      status === 'all' ||
      (status === 'completed' && completedQuestions.includes(q.id)) ||
      (status === 'todo' && !completedQuestions.includes(q.id));
    const matchesLevel = level === 'all' || q.difficulty.toLowerCase() === level;
    const showQuestion = !hideCompleted || !completedQuestions.includes(q.id);
    return matchesSearch && matchesStatus && matchesLevel && showQuestion;
  });

  const sortedQuestions = [...filteredQuestions].sort((a, b) => {
    if (sortBy === 'difficulty') {
      const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3 };
      return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
    } else if (sortBy === 'timeEstimate') {
      return a.timeEstimate - b.timeEstimate;
    }
    return a.id - b.id;
  });

  return (
    <div className="space-y-2">
      {sortedQuestions.map((question, index) => (
        <QuestionCard key={index} {...question} completed={completedQuestions.includes(question.id)} />
      ))}
    </div>
  );
}
