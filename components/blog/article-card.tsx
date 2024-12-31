import Image from "next/image"
import Link from "next/link"

interface ArticleCardProps {
  title: string
  image: string
  href: string
}

export function ArticleCard({ title, image, href }: ArticleCardProps) {
  return (
    <Link href={href} className="group flex items-start gap-4">
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="flex-1 text-sm font-medium group-hover:text-emerald-500">{title}</h3>
    </Link>
  )
}

