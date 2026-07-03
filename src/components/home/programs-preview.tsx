import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, ShieldCheck, Smile, Sparkles } from "lucide-react"

const programs = [
  {
    id: "dentista-do-bem",
    icon: Smile,
    title: "Dentista do Bem",
    audience: "Jovens de 11 a 17 anos",
    description: "Atendimento odontológico gratuito para jovens em situação de vulnerabilidade social, com acompanhamento da entrada ao cuidado continuado.",
    features: ["Triagem e encaminhamento", "Consulta acompanhada", "Rede voluntária por região"],
    href: "/programas#dentista-do-bem",
    color: "bg-primary",
  },
  {
    id: "apolonias-do-bem",
    icon: Heart,
    title: "Apolônias do Bem",
    audience: "Mulheres acolhidas pela rede",
    description: "Cuidado odontológico para mulheres que precisam reconstruir saúde, autonomia e autoestima com apoio especializado.",
    features: ["Acolhimento especializado", "Critérios sociais", "Jornada com continuidade"],
    href: "/programas#apolonias-do-bem",
    color: "bg-accent",
  },
]

export function ProgramsPreview() {
  return (
    <section className="relative overflow-hidden bg-secondary/25 py-14 sm:py-18 lg:py-28" aria-labelledby="programs-heading">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" aria-hidden="true" />
      <div className="container relative mx-auto px-4">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="tdb-reveal">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-extrabold uppercase tracking-[0.22em] text-primary">Programas</span>
            <h2 id="programs-heading" className="mt-5 text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Cada pessoa chega por uma porta. A rede acompanha a jornada inteira.
            </h2>
          </div>
          <div className="tdb-reveal tdb-reveal-delay-1 rounded-[2rem] border border-border/70 bg-card/85 p-5 shadow-xl shadow-primary/5 backdrop-blur sm:p-6">
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              Os programas preservam públicos, etapas e necessidades diferentes, enquanto a plataforma conecta orientação, documentos, consultas e mensagens em um fluxo único.
            </p>
            <Button variant="outline" size="lg" asChild className="mt-5 gap-2 rounded-full"><Link to="/programas">Conhecer programas<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></Button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {programs.map((program, index) => (
            <article key={program.id} className={`tdb-polished-card tdb-reveal tdb-reveal-delay-${index + 1} group relative flex min-h-full flex-col overflow-hidden rounded-[2.25rem] border border-border/70 bg-card p-6 shadow-xl shadow-primary/5 sm:p-8`}>
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
              <div className="relative flex items-start justify-between gap-4">
                <div className={`flex h-16 w-16 items-center justify-center rounded-3xl ${program.color} text-primary-foreground shadow-lg`}><program.icon className="h-8 w-8" aria-hidden="true" /></div>
                <span className="rounded-full bg-muted px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-muted-foreground">{program.audience}</span>
              </div>
              <h3 className="relative mt-7 text-3xl font-black tracking-tight text-foreground">{program.title}</h3>
              <p className="relative mt-4 flex-1 text-base leading-8 text-muted-foreground">{program.description}</p>
              <div className="relative mt-6 grid gap-3">
                {program.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 rounded-2xl bg-muted/45 p-3 text-sm font-bold text-foreground"><ShieldCheck className="h-4 w-4 shrink-0 text-success" aria-hidden="true" />{feature}</div>
                ))}
              </div>
              <Link to={program.href} className="relative mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-primary/10 px-5 text-sm font-black text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                Abrir jornada<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>

        <div className="tdb-reveal tdb-reveal-delay-3 mt-8 rounded-[2rem] border border-primary/10 bg-background/85 p-5 shadow-lg shadow-primary/5 backdrop-blur sm:p-6">
          <div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground"><Sparkles className="h-6 w-6" aria-hidden="true" /></div><p className="font-black text-foreground">Caminhos diferentes, uma mesma rede de cuidado.</p></div>
        </div>
      </div>
    </section>
  )
}
