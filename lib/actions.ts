// 'use server';

// import { cookies } from "next/headers";

// export async function toggleCompleted(id: number, completed: boolean) {
//   const cookieStore = await cookies();
//   const completedQuestions = cookieStore.get('completedQuestions');
//   let completedArray = completedQuestions ? JSON.parse(completedQuestions.value) : [];

//   if (completed) {
//     completedArray = [...new Set([...completedArray, id])];
//   } else {
//     completedArray = completedArray.filter((qId: number) => qId !== id);
//   }

//   cookieStore.set('completedQuestions', JSON.stringify(completedArray));

//   // Update streak
//   const today = new Date();
//   const lastStudyDate = cookieStore.get('lastStudyDate');
//   let streak = parseInt(cookieStore.get('streak')?.value || '0');

//   if (!lastStudyDate || new Date(lastStudyDate.value).toDateString() !== today.toDateString()) {
//     if (
//       lastStudyDate &&
//       new Date(lastStudyDate.value).toDateString() === new Date(today.getTime() - 86400000).toDateString()
//     ) {
//       streak++;
//     } else {
//       streak = 1;
//     }
//     cookieStore.set('streak', streak.toString());
//     cookieStore.set('lastStudyDate', today.toISOString());
//   }
// }

// export function toggleCompleted(id: number, completed: boolean) {
//   if (typeof window === 'undefined') return; // Ensure this only runs on the client-side

//   // Get the current completed questions from localStorage
//   const completedQuestions = localStorage.getItem('completedQuestions');
//   let completedArray = completedQuestions ? JSON.parse(completedQuestions) : [];

//   // Update the completed questions array based on the toggle action
//   if (completed) {
//     completedArray = [...new Set([...completedArray, id])];
//   } else {
//     completedArray = completedArray.filter((qId: number) => qId !== id);
//   }

//   // Save the updated completed questions list back to localStorage
//   localStorage.setItem('completedQuestions', JSON.stringify(completedArray));

//   // Update streak in localStorage
//   const today = new Date();
//   const lastStudyDate = localStorage.getItem('lastStudyDate');
//   let streak = parseInt(localStorage.getItem('streak') || '0');

//   // Check if the last study date is today or the previous day to calculate streak
//   if (!lastStudyDate || new Date(lastStudyDate).toDateString() !== today.toDateString()) {
//     if (
//       lastStudyDate &&
//       new Date(lastStudyDate).toDateString() === new Date(today.getTime() - 86400000).toDateString()
//     ) {
//       streak++;
//     } else {
//       streak = 1;
//     }
//     // Save the streak and last study date to localStorage
//     localStorage.setItem('streak', streak.toString());
//     localStorage.setItem('lastStudyDate', today.toISOString());
//   }
// }

// import { useLocalStorage } from '@/hooks/use-local-storage';

export function createToggleCompleted(
  setCompletedQuestions: (value: number[] | ((prev: number[]) => number[])) => void
) {
  return function (id: number, completed: boolean) {
    setCompletedQuestions((prev: number[]) =>
      completed ? [...new Set([...prev, id])] : prev.filter((qId) => qId !== id)
    );
  };
}

// // Update streak
// const today = new Date();
// const lastStudyDate = localStorage.getItem('lastStudyDate');
// let streak = parseInt(localStorage.getItem('streak') || '0');

// if (!lastStudyDate || new Date(lastStudyDate).toDateString() !== today.toDateString()) {
//   if (
//     lastStudyDate &&
//     new Date(lastStudyDate).toDateString() === new Date(today.getTime() - 86400000).toDateString()
//   ) {
//     streak++;
//   } else {
//     streak = 1;
//   }
//   localStorage.setItem('streak', streak.toString());
//   localStorage.setItem('lastStudyDate', today.toISOString());
// }
