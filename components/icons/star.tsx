import { cn } from '@/lib/utils';
import { Star as StarIcon } from 'lucide-react';

interface starProps {
  rating?: number;
  filled?: boolean;
  color?: 'amber' | 'slate' | 'red' | 'green';
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  viewOnly?: boolean;
}

export const Star = ({
  rating = 1,
  filled = false,
  color = 'amber',
  disabled = false,
  size = 'md',
  viewOnly = false
}: starProps) => {
  const starColor = {
    amber: 'text-amber-500',
    slate: 'text-muted-foreground',
    red: 'text-red-500',
    green: 'text-emerald-500'
  };

  const starSize = {
    sm: 'size-3',
    md: 'size-5',
    lg: 'size-8'
  };

  const StarSVG = () => {
    return (
      <div className="flex">
        {[...Array(rating)].map((_, i) => (
          <StarIcon
            key={i}
            className={cn('shrink-0', filled ? starColor[color] : 'text-border', starSize[size])}
            fill="currentColor"
          />
        ))}
      </div>
    );
  };

  return (
    <div className={`w-[${rating * 12}px]`}>
      {viewOnly ? (
        <StarSVG />
      ) : (
        <button
          className="appearance-none disabled:opacity-50"
          type="button"
          aria-label={`Star ${rating} out of 5`}
          disabled={disabled}
        >
          <StarSVG />
        </button>
      )}
    </div>
  );
};
