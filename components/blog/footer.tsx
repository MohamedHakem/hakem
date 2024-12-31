import Link from "next/link"
import { Twitter, Instagram, Youtube } from 'lucide-react'

export default function SiteFooter() {
  return (
    <footer className="mt-20 bg-slate-900 py-16 text-white">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Link href="/" className="text-xl font-bold text-emerald-500">
              BACKLINKO
            </Link>
            <p className="mt-4 text-sm text-slate-400">
              Next-level SEO training and link building strategies
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Learn</h4>
            <div className="mt-4 space-y-2">
              <Link href="#" className="block text-sm text-slate-400 hover:text-white">
                Blog
              </Link>
              <Link href="#" className="block text-sm text-slate-400 hover:text-white">
                Resources
              </Link>
              <Link href="#" className="block text-sm text-slate-400 hover:text-white">
                Best SEO Tools
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <div className="mt-4 space-y-2">
              <Link href="#" className="block text-sm text-slate-400 hover:text-white">
                About
              </Link>
              <Link href="#" className="block text-sm text-slate-400 hover:text-white">
                Contact Us
              </Link>
              <Link href="#" className="block text-sm text-slate-400 hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold">Connect</h4>
            <div className="mt-4 flex gap-4">
              <Link href="#" className="text-slate-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

