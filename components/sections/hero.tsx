import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function Hero() {
  return (
    <section className="container mx-auto grid items-center gap-8 px-6 pb-16 pt-12 md:grid-cols-2 md:py-24">
      <div className="space-y-6">
        <div className="flex items-center">
          <Avatar className="h-24 w-24 ring-1 ring-primary/50">
            <AvatarImage src="/me.jpg" alt="Your portrait" />
            <AvatarFallback className="text-sm">ME</AvatarFallback>
          </Avatar>
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Exploring Interfaces</p>
        <h1 className="text-pretty text-4xl font-semibold leading-tight md:text-6xl">
          I design and ship scalable web apps end‑to‑end.
        </h1>
        <p className="max-w-prose text-muted-foreground">
          From elegant interfaces to resilient APIs and data systems, I build fast, reliable products with a focus on
          DX, performance, and accessibility.
        </p>
      </div>
    </section>
  )
}
