import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Left Side: Text Content */}
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Full-Stack Developer
          </p>
          <h1 className="mt-3 text-balance text-4xl font-semibold leading-tight md:text-6xl">
            Samuel Sebastian Sujaya
          </h1>
          <p className="mt-4 text-pretty text-muted-foreground md:text-lg">
            I am a Computer Science student enrolled in BINUS University, currently focusing on database technology.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href="#contact" aria-label="Get in touch">
                Get in touch
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-border text-foreground hover:bg-muted bg-transparent"
            >
              <a href="#projects" aria-label="See my work">
                See my work
              </a>
            </Button>
          </div>
        </div>

        {/* Right Side: Avatar / Image */}
        <div className="flex justify-end pr-6 md:pr-6">
          <Avatar className="h-64 w-64 ring-2 ring-primary/40 shadow-xl shadow-primary/10">
            <AvatarImage
              src="public/profile.jpg"
              alt="Samuel Sebastian Sujaya"
              className="object-cover"
            />
            <AvatarFallback>SS</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  )
}
