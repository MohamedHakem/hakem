// import Image from "next/image"
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface ResourceHubCardProps {
  title: string;
  description: string;
  links: Array<{ title: string; href: string }>;
  color: string;
  // image: string
}

// export default function ResourceHubCard({ title, description, links, color, image }: ResourceHubCardProps) {
export default function ResourceHubCard({ title, description, links, color }: ResourceHubCardProps) {
  return (
    <div className="rounded-lg border bg-white p-6">
      <div className="mb-6">
        <div className={`relative mb-4 h-32 w-full overflow-hidden rounded-lg ${color}`}>
          <div className="h-full w-full bg-gray-200" />
        </div>
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        {links.map((link, index) => (
          <Link key={index} href={link.href} className="flex items-center gap-2 text-sm hover:text-emerald-500">
            <ChevronRight className="h-4 w-4" />
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
