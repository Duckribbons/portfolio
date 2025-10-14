"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/* compact header with anchored nav */
export function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link
          href="#"
          className={cn(
            "font-mono text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors",
          )}
        >
          {"Home"}
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#projects" className="hover:text-foreground">
            Projects
          </a>
          <a href="#skills" className="hover:text-foreground">
            Skills
          </a>
          <a href="#about" className="hover:text-foreground">
            About
          </a>
          <a href="#contact" className="hover:text-foreground">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#projects" aria-label="View Projects">
              View Projects
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
