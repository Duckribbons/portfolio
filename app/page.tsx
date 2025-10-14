import { Header } from "@/components/portfolio/header"
import { Hero } from "@/components/portfolio/hero"
import { Projects } from "@/components/portfolio/projects"
import { Skills } from "@/components/portfolio/skills"
import { About } from "@/components/portfolio/about"
import { Contact } from "@/components/portfolio/contact"
import { Starfield } from "@/components/portfolio/starfield"

export default function Page() {
  return (
    <main>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:m-4 focus:rounded focus:bg-secondary focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <Starfield />
      <Header />
      <div id="content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <footer className="mx-auto max-w-6xl px-4 py-10 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Samuel Sebastian Sujaya
        </footer>
      </div>
    </main>
  )
}
