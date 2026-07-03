import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Smile } from "lucide-react"

const programs = [
  {
    id: "dentista-do-bem",
    icon: Smile,
    title: "Dentista do Bem",
    description: "Atendimento odontológico gratuito para jovens de 11 a 17 anos em situação de vulnerabilidade social.",
    features: ["Tratamento gratuito até os 18 anos", "Acompanhamento da jornada", "Rede de voluntários por região"],
    href: "/programas#dentista-do-bem",
    color: "bg-primary",
  },
  {
    id: "apolonias-do-bem",
    icon: Heart,
    title: "Apolônias do Bem",
    description: "Cuidado odontológico para mulheres cis e trans que tiveram a dentição afetada por situações de violência.",
    features: ["Acolhimento especializado", "Triagem com critérios sociais", "Reconstrução de autonomia e autoestima"],
    href: "/programas#apolonias-do-bem",
    color: "bg-accent",
  },
]

export function ProgramsPreview() {
  return (
    <section className="bg-secondary/30 py-12 sm:py-16 lg:py-24" aria-labelledby="programs-heading">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Programas</span>
            <h2 id="programs-heading" className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">Cuidado com nome, rosto e continuidade.</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">Os fluxos digitais respeitam os principais programas da Turma do Bem e ajudam cada pessoa a entender seu próximo passo.</p>
          </div>
          <Button variant="outline" size="lg" asChild className="gap-2 rounded-full"><Link to="/programas">Ver todos<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></Button>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {programs.map((program) => (
            <article key={program.id} className="group relative flex min-h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card p-6 shadow-md shadow-primary/5 transition-all hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/10">
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-primary/10 blur-2xl" aria-hidden="true" />
              <div className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${program.color} text-primary-foreground`}><program.icon className="h-7 w-7" aria-hidden="true" /></div>
              <h3 className="relative mt-5 text-2xl font-extrabold text-foreground">{program.title}</h3>
              <p className="relative mt-3 flex-1 text-base leading-7 text-muted-foreground">{program.description}</p>
              <ul className="relative mt-5 space-y-2">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />{feature}</li>
                ))}
              </ul>
              <Link to={program.href} className="relative mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-primary/80">Conhecer programa<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
