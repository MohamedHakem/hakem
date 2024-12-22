import getStreak  from "@/lib/streak";

export async function Header() {
  const streak = await getStreak();

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-semibold">Klist 75</h1>
      <div className="flex items-center gap-2 text-sm">
        <span className="font-medium">🔥 {streak} day streak</span>
      </div>
    </div>
  );
}
