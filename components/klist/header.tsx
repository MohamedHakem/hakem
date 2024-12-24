import ProgressBar from "./progress-bar";
import Streak from "./streak";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-semibold">Klist 75</h1>
      <div className="flex items-center gap-4 text-sm">
        <ProgressBar hideOnMobile />
        <Streak />
      </div>
    </div>
  );
}
