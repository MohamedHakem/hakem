'use client';

import { useIntersectionObserver } from '@uidotdev/usehooks';
import { FilterBar } from './filter-bar';
import ProgressBar from './progress-bar';
import { Suspense } from 'react';
import { cn } from '@/lib/utils';

export default function StickyFilterSection() {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "-1px 0px 0px 0px" // Trigger slightly before the element hits the top
  });

  const isStuck = !entry?.isIntersecting || false;

  // console.log("StickyFilterSection re-renders!");

  return (
    <>
      {/* Sentinel element to detect intersection */}
      <div ref={ref} className="absolute h-[1px] w-full left-0" />
      
      {/* Sticky container */}
      <div
        className={`
          w-full mx-auto transition-all duration-200 ease-in-out
          sticky top-0 z-10 backdrop-blur-md md:my-3
          ${isStuck ? 'md:max-w-7xl bg-white/70 md:bg-white/80 py-2 px-3' : 'md:max-w-3xl md:px-4'}
        `}
      >
        <div className={cn("md:py-2 px-4 md:p-0 rounded-md", isStuck ? '' : '')}>
          <div className="flex gap-1">
            <ProgressBar />
            <Suspense fallback={<div>Loading...</div>}>
              <FilterBar />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
