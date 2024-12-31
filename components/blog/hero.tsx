import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HeroSection() {
  return (
    <section className="container py-20 text-center">
      <h1 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight">
        Where SEO best practices meet real-world results.
      </h1>
      <div className="mx-auto mt-8 max-w-xl rounded-lg border bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>BL</AvatarFallback>
          </Avatar>
          <div className="text-left">
            <p className="text-sm">{"\"I thought the blog was great! But the examples!\""}</p>
            <p className="text-xs text-muted-foreground">Senior Manager, VP Marketing at HubSpot</p>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <Input placeholder="Your email" className="flex-1" />
          <Button className="bg-emerald-500 hover:bg-emerald-600">Try It</Button>
        </div>
      </div>
    </section>
  )
}

