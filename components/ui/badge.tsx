import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center h-full rounded-md border px-1 py-[2px] md:py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
        secondary: 'border-transparent bg-[#e0e0e050] text-secondary-foreground hover:bg-secondary/80',
        destructive: 'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        outline: 'text-foreground',
        ghost: 'border-transparent bg-transparent text-primary-foreground shadow-none hover:bg-primary/80',
        skill: 'border-transparent bg-[#e0e0e060] text-secondary-foreground hover:bg-secondary/80 px-[6px]',
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
  responsive?: string;
}

function Badge({ className, variant, icon, responsive, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className, 'flex', responsive)} {...props}>
      {icon && <span className={props.children ? "mr-[2px]" : ""}>{icon}</span>}
      <div className="truncate font-normal">{props.children}</div>
    </div>
  );
}

export { Badge, badgeVariants };
