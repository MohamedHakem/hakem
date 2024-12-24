// import { cookies } from 'next/headers';

// export async function getCompletedQuestions(): Promise<number[]> {
//   const cookieStore = await cookies();
//   const completedQuestions = cookieStore.get('completedQuestions');
//   return completedQuestions ? JSON.parse(completedQuestions.value) : [];
// }

// This function now uses localStorage instead of cookies (use cookies later on if you will get the Qs with it's completed status from a db)
export function getCompletedQuestions(): number[] {
  if (typeof window === 'undefined') return []; // Handle SSR
  const completedQuestions = window.localStorage.getItem('completedQuestions');
  return completedQuestions ? JSON.parse(completedQuestions) : [];
}
