import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

/* projects grid using cards; replace with your projects */
const projects = [
  {
    title: "Link Detection Website",
    desc: "Website to detect whether a link is suspicious, malicious, or illegal.",
    tech: ["Next.js", "React", "Pandas", "Python"],
    live: "#",
    repo: "https://github.com/Duckribbons",
  },
  {
    title: "Flood Report",
    desc: "Flood detection AI dashboard to help mitigate risks and damages caused by floods.",
    tech: ["TypeScript", "Playwright", "Python", "QGIS"],
    live: "#",
    repo: "https://github.com/Duckribbons",
  },
  {
    title: "Catering Website UI design",
    desc: "Sleek, dark-themed web design made for a catering service.",
    tech: ["HTML", "TypeScript", "CSS"],
    live: "#",
    repo: "https://github.com/Duckribbons",
  },
]

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold">Featured Projects</h2>
        <a
          href="https://github.com/Duckribbons"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          View GitHub →
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.title} className="border-border bg-card/60">
            <CardHeader>
              <CardTitle className="text-lg">{p.title}</CardTitle>
              <CardDescription className="text-muted-foreground">{p.desc}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <Badge key={t} variant="secondary" className="bg-muted text-muted-foreground">
                  {t}
                </Badge>
              ))}
            </CardContent>
            <CardFooter className="flex gap-3">
              <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={p.live} aria-label={`Open ${p.title} live`}>
                  Live
                </a>
              </Button>
              <Button asChild size="sm" variant="outline" className="border-border hover:bg-muted bg-transparent">
                <a href={p.repo} aria-label={`Open ${p.title} repository`}>
                  Code
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-10 section-divider" />
    </section>
  )
}
