import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface StudyPlanSettingsProps {
  studyTime: { hoursPerWeek: number; weeks: number };
  setStudyTime: (value: { hoursPerWeek: number; weeks: number }) => void;
}

export function StudyPlanSettings({ studyTime, setStudyTime }: StudyPlanSettingsProps) {
  return (
    <div className="mb-6 p-4 border rounded-lg bg-muted/50">
      <h2 className="text-lg font-semibold mb-4">Study Plan</h2>
      <div className="flex items-center gap-4 mb-4">
        <div>
          <Label htmlFor="hours-per-week">Hours per week:</Label>
          <Select
            value={studyTime.hoursPerWeek.toString()}
            onValueChange={(value) => setStudyTime({ ...studyTime, hoursPerWeek: parseInt(value) })}
          >
            <SelectTrigger id="hours-per-week" className="w-[100px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 10, 15, 20].map((hours) => (
                <SelectItem key={hours} value={hours.toString()}>
                  {hours}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="weeks">Weeks:</Label>
          <Select
            value={studyTime.weeks.toString()}
            onValueChange={(value) => setStudyTime({ ...studyTime, weeks: parseInt(value) })}
          >
            <SelectTrigger id="weeks" className="w-[100px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 4, 8, 12, 16, 20, 24].map((weeks) => (
                <SelectItem key={weeks} value={weeks.toString()}>
                  {weeks}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
