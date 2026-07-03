import { Building2, Heart, Smile, Users } from "lucide-react"

const stats = [
  { icon: Heart, value: "+90.000", label: "Sorrisos transformados", description: "Jovens atendidos pela rede da Turma do Bem." },
  { icon: Users, value: "+18.000", label: "Voluntários", description: "Profissionais conectados por impacto social." },
  { icon: Building2, value: "+1.300", label: "Municípios", description: "Presença distribuída pelo Brasil." },
  { icon: Smile, value: "1 jornada", label: "Fluxo integrado", description: "Consultas, documentos, mensagens e notificações." },
]

export function ImpactSection() {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-24" aria-labelledby="impact-heading">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-accent">Impacto social</span>
          <h2 id="impact-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">Uma plataforma para transformar cuidado em continuidade.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">Indicadores, jornada e comunicação foram organizados para reforçar confiança, escala e acolhimento.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article key={stat.label} className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card p-6 shadow-md shadow-primary/5 transition-all hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/10">
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-secondary/20 blur-2xl" aria-hidden="true" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><stat.icon className="h-6 w-6" aria-hidden="true" /></div>
              <p className="relative mt-5 text-3xl font-extrabold text-foreground">{stat.value}</p>
              <p className="relative mt-2 font-bold text-foreground">{stat.label}</p>
              <p className="relative mt-2 text-sm leading-6 text-muted-foreground">{stat.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
