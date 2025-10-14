import { Button } from "@/components/ui/button"

/* contact with email and social links */
export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
      <p className="mt-3 text-muted-foreground">Currently open to hiring.</p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <a href="mailto:samuelsebastiansujaya@gmail.com" aria-label="Email me">
            Email me
          </a>
        </Button>
        <Button variant="outline" asChild className="border-border hover:bg-muted bg-transparent">
          <a href="https://www.linkedin.com/in/samuel-sebastian-sujaya-1453a7319/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            LinkedIn
          </a>
        </Button>
        <Button variant="outline" asChild className="border-border hover:bg-muted bg-transparent">
          <a href="https://github.com/Duckribbons" target="_blank" rel="noreferrer" aria-label="GitHub">
            GitHub
          </a>
        </Button>
      </div>
      <p className="sr-only">End of page</p>
    </section>
  )
}
