import { cookies } from 'next/headers';

export async function getCompletedQuestions(): Promise<number[]> {
  const cookieStore = await cookies();
  const completedQuestions = cookieStore.get('completedQuestions');
  return completedQuestions ? JSON.parse(completedQuestions.value) : [];
}
