import { Progress } from '@/components/ui/progress';

interface HeaderProps {
  completedCount: number;
  totalCount: number;
  streak: number;
}

export function Header({ completedCount, totalCount, streak }: HeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-semibold">Grind 75</h1>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium">🔥 {streak} day streak</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>
            {completedCount} / {totalCount} completed
          </span>
          <Progress value={(completedCount / totalCount) * 100} className="w-32 h-2 bg-green-100">
            <div
              className="h-full bg-green-500 rounded-full"
              style={{ width: `${(completedCount / totalCount) * 100}%` }}
            />
          </Progress>
        </div>
      </div>
    </div>
  );
}
