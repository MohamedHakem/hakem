'use client';

// import { getCompletedQuestions } from '@/lib/completed-klist-questions';
// import { getQuestions } from '@/lib/klist-questions';
// import { Progress } from '@/components/ui/progress';

// export default async function ProgressBar({ hideOnMobile = false }: { hideOnMobile?: boolean }) {
//   if (!hideOnMobile) {
//     const completedQuestions = await getCompletedQuestions();
//     const totalQuestions = await getQuestions();
//     const progress = (completedQuestions.length / totalQuestions.length) * 100;

//     return (
//       <div className="w-full border rounded-md p-2 flex flex-row items-center justify-center flex-1 gap-2 bg-white">
//         <Progress value={progress} className="w-full h-2" />
//         <div className="text-sm text-muted-foreground text-center flex flex-row flex-none items-center justify-center gap-1">
//           <div className="flex-shrink-0">
//             {completedQuestions.length} / {totalQuestions.length}
//           </div>
//           <div>completed</div>
//         </div>
//       </div>
//     );
//   }

//   return null;
// }

// 'use client';

// import { useState } from 'react';
// import { useLocalStorage } from '@/hooks/use-local-storage';
// import { Progress } from '@/components/ui/progress';
// import { getQuestions } from '@/lib/klist-questions';

// export default function ProgressBar({ hideOnMobile = false }: { hideOnMobile?: boolean }) {
//   const [completedQuestions, setCompletedQuestions] = useLocalStorage<number[]>('completedQuestions', []);
//   const [totalQuestions] = useState(getQuestions());

//   const progress = totalQuestions.length ? (completedQuestions.length / totalQuestions.length) * 100 : 0;

//   if (!hideOnMobile) {
//     return (
//       <div className="w-full border rounded-md p-2 flex flex-row items-center justify-center flex-1 gap-2 bg-white">
//         <Progress value={progress} className="w-full h-2" />
//         <div className="text-sm text-muted-foreground text-center flex flex-row flex-none items-center justify-center gap-1">
//           <div className="flex-shrink-0">
//             {completedQuestions.length} / {totalQuestions.length}
//           </div>
//           <div>completed</div>
//         </div>
//       </div>
//     );
//   }

//   return null;
// }

// 'use client';

// import { useState, useEffect } from 'react';
// import { useLocalStorage } from '@/hooks/use-local-storage';
// import { Progress } from '@/components/ui/progress';
// import { getQuestions } from '@/lib/klist-questions';

// export default function ProgressBar({ hideOnMobile = false }: { hideOnMobile?: boolean }) {
//   const [completedQuestions, setCompletedQuestions] = useLocalStorage<number[]>('completedQuestions', []);
//   const [totalQuestions] = useState(getQuestions());

//   const progress = totalQuestions.length ? (completedQuestions.length / totalQuestions.length) * 100 : 0;

//   // Sync the completed questions with localStorage when it changes
//   useEffect(() => {
//     const storedCompletedQuestions = localStorage.getItem('completedQuestions');
//     if (storedCompletedQuestions) {
//       setCompletedQuestions(JSON.parse(storedCompletedQuestions));
//     }
//   }, [setCompletedQuestions]); // re-run whenever the component mounts or when setCompletedQuestions changes

//   console.log('🚀 ~ ProgressBar ~ completedQuestions:', completedQuestions);

//   if (!hideOnMobile) {
//     return (
//       <div className="w-full border rounded-md p-2 flex flex-row items-center justify-center flex-1 gap-2 bg-white">
//         <Progress value={progress} className="w-full h-2" />
//         <div className="text-sm text-muted-foreground text-center flex flex-row flex-none items-center justify-center gap-1">
//           <div className="flex-shrink-0">
//             {completedQuestions.length} / {totalQuestions.length}
//           </div>
//           <div>completed</div>
//         </div>
//       </div>
//     );
//   }

//   return null;
// }

// 'use client';

// import { useState, useEffect } from 'react';
// import { useLocalStorage } from '@/hooks/use-local-storage';
// import { Progress } from '@/components/ui/progress';
// import { getQuestions } from '@/lib/klist-questions';

// export default function ProgressBar({ hideOnMobile = false }: { hideOnMobile?: boolean }) {
//   const [completedQuestions, setCompletedQuestions] = useLocalStorage<number[]>('completedQuestions', []);
//   const [totalQuestions] = useState(getQuestions());

//   const progress = totalQuestions.length ? (completedQuestions.length / totalQuestions.length) * 100 : 0;

//   // Effect to listen to localStorage changes and update state accordingly
//   useEffect(() => {
//     const updateCompletedQuestions = () => {
//       const storedCompletedQuestions = localStorage.getItem('completedQuestions');
//       if (storedCompletedQuestions) {
//         setCompletedQuestions(JSON.parse(storedCompletedQuestions));
//       }
//     };

//     // Add event listener for changes to localStorage
//     window.addEventListener('storage', updateCompletedQuestions);

//     // Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener('storage', updateCompletedQuestions);
//     };
//   }, [setCompletedQuestions]);

//   console.log('🚀 ~ ProgressBar ~ completedQuestions:', completedQuestions);

//   if (!hideOnMobile) {
//     return (
//       <div className="w-full border rounded-md p-2 flex flex-row items-center justify-center flex-1 gap-2 bg-white">
//         <Progress value={progress} className="w-full h-2" />
//         <div className="text-sm text-muted-foreground text-center flex flex-row flex-none items-center justify-center gap-1">
//           <div className="flex-shrink-0">
//             {completedQuestions.length} / {totalQuestions.length}
//           </div>
//           <div>completed</div>
//         </div>
//       </div>
//     );
//   }

//   return null;
// }

// import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { getQuestions } from '@/lib/klist-questions';

export default function ProgressBar({ hideOnMobile = false }: { hideOnMobile?: boolean }) {
  const [completedQuestions] = useLocalStorage<number[]>('completedQuestions', []);
  // const [totalQuestions] = useState(getQuestions());
  const totalQuestions = getQuestions();
  // make a state here for the completed questions, and whenever it changes in the LS, update the state in the useEffect

  const progress = totalQuestions.length ? (completedQuestions.length / totalQuestions.length) * 100 : 0;

  // Update completedQuestions if localStorage changes
  // useEffect(() => {
  //   const storedCompletedQuestions = JSON.parse(localStorage.getItem('completedQuestions') || '[]');
  //   setCompletedQuestions(storedCompletedQuestions); // Ensure the state is updated if localStorage changes
  // }, [completedQuestions]); // Depend on completedQuestions to update when it changes

  // console.log('🚀 ~ ProgressBar ~ completedQuestions:', completedQuestions);

  if (!hideOnMobile) {
    return (
      <div className="md:hidden w-full border rounded-md px-3 py-2 flex flex-row items-center justify-center flex-1 gap-2 bg-white">
        <Progress value={progress} className="w-full h-2" />
        <div className="text-xs text-muted-foreground text-center flex flex-row flex-none items-center justify-center gap-1">
          <div className="flex-shrink-0">
            {completedQuestions.length} /{totalQuestions.length}
          </div>
          <div>completed</div>
        </div>
      </div>
    );
  }

  return (
    <div className="hidden md:flex w-full border rounded-md px-3 py-2 flex-row items-center justify-center flex-1 gap-2 bg-white">
      <Progress value={progress} className="w-full h-2" />
      <div className="text-xs text-muted-foreground text-center flex flex-row flex-none items-center justify-center gap-1">
        <div className="flex-shrink-0">
          {completedQuestions.length} /{totalQuestions.length}
        </div>
        <div>completed</div>
      </div>
    </div>
  );
}
