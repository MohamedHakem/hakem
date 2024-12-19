import { cn } from '@/lib/utils';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { ReactNode } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export default function Section({
  title,
  title2,
  desc,
  children,
  className,
  scrollable,
  ctaText,
  ctaLink,
  ctaVariant,
  contactIcons,
  titleIcon
}: {
  title: string;
  title2?: string;
  desc?: string;
  children?: ReactNode;
  gridOrder?: string;
  gridOrderMD?: string;
  mdColSpan?: string;
  mdRowSpan?: string;
  className?: string;
  scrollable?: boolean;
  ctaText?: string;
  ctaLink?: string;
  ctaVariant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'upwork' | 'youtube';
  contactIcons?: boolean;
  titleIcon?: ReactNode;
}) {
  return (
    <section
      className={cn(
        'bg-white rounded-2xl overflow-auto flex flex-col h-auto max-h-[28rem] inset border relative gap-1',
        scrollable ? 'px-0 pt-3' : 'p-2.5',
        contactIcons ? 'gap-0.5' : '',
        className
      )}
      id={title.toLowerCase()}
    >
      <div className={cn('relative flex justify-between items-center', scrollable && 'border-b px-3 pb-2.5')}>
        <div className="flex items-center gap-2">
          <h2
            className={cn(
              'font-bold text-lg',
              contactIcons ? 'leading-6 text-xl' : '',
              scrollable ? 'md:text-lg' : '',
              titleIcon ? 'flex gap-1 items-center text-base' : ''
            )}
          >
            {titleIcon ? titleIcon : null}
            {title}
          </h2>
          <h3 className={`text-xs`}>
            {contactIcons ? (
              <p className="flex gap-1.5">
                <span>{'•'}</span>
                <span>Software Developer</span>
                <span>{'•'}</span>
                <span>Egypt</span>
              </p>
            ) : (
              title2
            )}
          </h3>
        </div>
        {ctaLink && (
          <Link href={ctaLink} target="_blank">
            <Button variant={ctaVariant} className={cn('border-0 rounded-lg')}>
              {ctaText}
            </Button>
          </Link>
        )}
        {contactIcons && (
          <div className="flex gap-1 mr-0.5 h-fit">
            <a href={'https://github.com/MohamedHakem'}>
              <Badge variant={'secondary'} icon={<GitHubLogoIcon width={21} height={21} />} />
            </a>
            <a href={'https://www.linkedin.com/in/m-hakem/'}>
              <Badge variant={'secondary'} icon={<LinkedInLogoIcon width={21} height={21} color="#0077B5" />} />
            </a>
          </div>
        )}
      </div>
      {desc ? <p>{desc}</p> : null}
      {children ? children : null}
      {scrollable && (
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#cccccc80] to-transparent pointer-events-none" />
      )}
    </section>
  );
}
