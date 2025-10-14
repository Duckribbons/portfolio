const skillGroups: { label: string; items: string[] }[] = [
  { label: "Frontend", items: ["React", "Next.js", "SWR", "Tailwind"] },
  { label: "Backend", items: ["Node.js", "REST", "WebSockets", "Auth"] },
  { label: "Datastores", items: ["Postgres", "Redis", "Prisma"] },
  { label: "AI & Data", items: ["AI SDK", "RAG", "Embeddings"] },
  { label: "Ops", items: ["Vercel", "CI/CD", "Testing", "Observability"] },
]
;<div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5"></div>
