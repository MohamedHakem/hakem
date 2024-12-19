'use client';

import { cn } from '@/lib/utils';
import { Drawer } from 'vaul';
import { ReactNode } from 'react';

interface VaulDrawerProps {
  trigger: ReactNode;
  content: ReactNode;
  title: ReactNode;
  direction?: 'bottom' | 'top' | 'left' | 'right';
}

export default function VaulDrawer({ trigger, content, title, direction = 'bottom' }: VaulDrawerProps) {
  return (
    <Drawer.Root shouldScaleBackground direction={direction}>
      <Drawer.Trigger className="relative flex min-h-10 w-full flex-shrink-0 items-center justify-center gap-2 overflow-hidden bg-white text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
        {trigger}
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />

        {/* <Drawer.Title className="block">{title}</Drawer.Title> */}
        <Drawer.Content
          className={cn('fixed z-10 outline-none flex w-full', direction === 'bottom' ? 'bottom-4' : 'top-4')}
          style={{ '--initial-transform': 'calc(100% + 8px)' } as React.CSSProperties}
        >
          <div className="bg-zinc-50 h-full w-full flex flex-col grow rounded-[36px] max-w-96 mx-4 xxs:mx-auto">
            {/* <div className="mx-4 flex flex-col grow w-full max-w-96"> */}
            <Drawer.Title>
              <div className="p-5 pt-5 pb-3 border-b border-gray-100">{title}</div>
            </Drawer.Title>
            <Drawer.Description className="hidden" />
            {/* add work-specific badges here, location, work type, employment type, date */}
            <div className="px-0">{content}</div>

            <div className="px-6">
              <Drawer.Close className="text-center flex my-5 h-12 w-full items-center gap-[15px] rounded-[16px] bg-[#e7e7e790] px-4 text-[17px] font-semibold text-[#222222] transition-transform focus:scale-95 focus-visible:shadow-focus-ring-button active:scale-95 md:font-medium">
                {/* <Drawer.Close className="text-center flex my-4 h-12 w-full items-center gap-[15px] rounded-[16px] px-4 text-[17px] font-semibold text-[#222222] transition-transform focus:scale-95 focus-visible:shadow-focus-ring-button active:scale-95 md:font-medium"> */}
                <div className="text-center flex justify-center my-4 h-full w-full items-center gap-[15px] px-4 text-[17px] font-semibold text-[#222222] transition-transform focus:scale-95 focus-visible:shadow-focus-ring-button active:scale-95 md:font-medium">
                  Close
                </div>
              </Drawer.Close>
            </div>
            {/* </div> */}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('grid gap-1.5 p-4 text-center sm:text-left', className)} {...props} />
);
DrawerHeader.displayName = 'DrawerHeader';
