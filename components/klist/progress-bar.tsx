import { getCompletedQuestions } from '@/lib/completed-klist-questions';
import { getQuestions } from '@/lib/klist-questions';
import { Progress } from '@/components/ui/progress';

export default async function ProgressBar({ hideOnMobile = false }: { hideOnMobile?: boolean }) {
  if (hideOnMobile) return null;

  const completedQuestions = await getCompletedQuestions();
  const totalQuestions = await getQuestions();
  const progress = (completedQuestions.length / totalQuestions.length) * 100;

  return (
    <div className="w-full border rounded-md p-2 flex flex-row items-center justify-center flex-1 gap-2 bg-white">
      <Progress value={progress} className="w-full h-2" />
      <div className="text-sm text-muted-foreground text-center flex flex-row flex-none items-center justify-center gap-1">
        <div className="flex-shrink-0">
          {completedQuestions.length} / {totalQuestions.length}
        </div>
        <div>completed</div>
      </div>
    </div>
  );
}
