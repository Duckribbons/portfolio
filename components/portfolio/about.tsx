/* simple about with a compact timeline */
export function About() {
  const events = [
    {
      time: "2024—Present",
      title: "Apprentice Full-Stack Engineer",
      desc: "Still learning how to design and create applications from the back-end and the front-end.",
    },
    {
      time: "2023-Present",
      title: "BINUS University Student",
      desc: "Learnt most of my programming and computational thinking skills during this tenure.",
    },
    { time: "2023-2024", title: "Partner Sales Agent", desc: "Part-time sales agent for a year to build up connections and soft-skills." },
  ]
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
      <p className="mt-4 max-w-3xl text-muted-foreground">
        I am passionate about making projects that help me develop as a programmer and I am keen to learning new things!
      </p>
      <ol className="mt-8 relative border-l border-border pl-6">
        {events.map((e) => (
          <li key={e.time} className="mb-6">
            <span className="absolute -left-[9px] mt-1 h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />
            <p className="text-xs uppercase tracking-wider text-muted-foreground">{e.time}</p>
            <p className="mt-1 font-medium">{e.title}</p>
            <p className="text-sm text-muted-foreground">{e.desc}</p>
          </li>
        ))}
      </ol>
      <div className="mt-10 section-divider" />
    </section>
  )
}
