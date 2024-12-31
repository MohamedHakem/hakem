import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SiteHeader() {
  return (
    <header className="w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold text-emerald-500">
          BACKLINKO
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="#" className="text-sm font-medium hover:underline">
            Articles
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline">
            Blog
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline">
            Templates
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline">
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline">
            Newsletter
          </Link>
          <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
            Try Backlinko
          </Button>
        </nav>
      </div>
    </header>
  )
}

