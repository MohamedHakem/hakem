'use server';

import { cookies } from "next/headers";

export async function toggleCompleted(id: number, completed: boolean) {
  const cookieStore = await cookies();
  const completedQuestions = cookieStore.get('completedQuestions');
  let completedArray = completedQuestions ? JSON.parse(completedQuestions.value) : [];

  if (completed) {
    completedArray = [...new Set([...completedArray, id])];
  } else {
    completedArray = completedArray.filter((qId: number) => qId !== id);
  }

  cookieStore.set('completedQuestions', JSON.stringify(completedArray));

  // Update streak
  const today = new Date();
  const lastStudyDate = cookieStore.get('lastStudyDate');
  let streak = parseInt(cookieStore.get('streak')?.value || '0');

  if (!lastStudyDate || new Date(lastStudyDate.value).toDateString() !== today.toDateString()) {
    if (
      lastStudyDate &&
      new Date(lastStudyDate.value).toDateString() === new Date(today.getTime() - 86400000).toDateString()
    ) {
      streak++;
    } else {
      streak = 1;
    }
    cookieStore.set('streak', streak.toString());
    cookieStore.set('lastStudyDate', today.toISOString());
  }
}
