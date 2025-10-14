import { Badge } from "@/components/ui/badge"

/* skills grouped as compact badges */
export function Skills() {
  const groups = [
    { label: "Frontend", items: ["React", "Next.js", "CSS", "Tailwind", "TypeScript"] },
    { label: "Backend", items: ["Node.js", "Postgres", "Python", "Java", "C++"] },
    { label: "AI & Data", items: ["Microsoft Azure", "MySQL", "MongoDB", "TableAU"] },
    { label: "Ops", items: ["Kafka", "CI/CD", "GIT"] },
  ]

  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {groups.map((g) => (
          <div key={g.label} className="rounded-lg border border-border bg-card/60 p-4">
            <p className="text-sm text-muted-foreground">{g.label}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <Badge key={item} variant="secondary" className="bg-muted text-muted-foreground">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 section-divider" />
    </section>
  )
}
