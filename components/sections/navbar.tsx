import { Button } from "@/components/ui/button"
import Link from "next/link"
export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="#" className="font-mono text-sm tracking-widest text-muted-foreground hover:text-foreground">
          {"<fullstack.dev />"}
        </Link>
        <Button size="sm" className="ml-2" asChild>
          <a href="#contact" aria-label="Hire me">
            Hire Me
          </a>
        </Button>
      </nav>
    </header>
  )
}
