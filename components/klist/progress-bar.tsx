import { getCompletedQuestions } from '@/lib/completed-klist-questions';
import { getQuestions } from '@/lib/klist-questions';
import { Progress } from '@/components/ui/progress';

export default async function ProgressBar() {
  const completedQuestions = await getCompletedQuestions();
  const totalQuestions = await getQuestions();
  const progress = (completedQuestions.length / totalQuestions.length) * 100;

  return (
    <div className="w-full mt-4 mb-6">
      <Progress value={progress} className="w-full h-2" />
      <p className="text-sm text-muted-foreground mt-2 text-center">
        {completedQuestions.length} / {totalQuestions.length} completed
      </p>
    </div>
  );
}
