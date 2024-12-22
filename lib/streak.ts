import { cookies } from 'next/headers';

export default async function getStreak(): Promise<number> {
  const cookieStore = await cookies();
  const streakCookie = cookieStore.get('streak');
  const lastStudyDateCookie = cookieStore.get('lastStudyDate');

  const streak = streakCookie ? parseInt(streakCookie.value) : 0;
  const lastStudyDate = lastStudyDateCookie ? new Date(lastStudyDateCookie.value) : null;

  const today = new Date();
  if (lastStudyDate && lastStudyDate.toDateString() === today.toDateString()) {
    return streak;
  } else if (lastStudyDate && lastStudyDate.toDateString() === new Date(today.getTime() - 86400000).toDateString()) {
    return streak + 1;
  } else {
    return 1;
  }
}
