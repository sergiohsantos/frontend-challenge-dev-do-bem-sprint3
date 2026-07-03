import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, ShieldCheck, Sparkles, Users } from "lucide-react"

const stats = [
  { value: "+90 mil", label: "jovens atendidos" },
  { value: "+18 mil", label: "dentistas voluntários" },
  { value: "+1.300", label: "municípios alcançados" },
  { value: "+1,2 mil", label: "mulheres acolhidas" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground lg:py-24">
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute left-8 top-10 h-40 w-40 rounded-full border border-primary-foreground/30" />
        <div className="absolute bottom-12 right-10 h-64 w-64 rounded-full border border-secondary/60" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary blur-3xl" />
      </div>
      <div className="container relative mx-auto grid gap-10 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm backdrop-blur">
            <Heart className="h-4 w-4 text-accent" aria-hidden="true" />
            Tecnologia para ampliar o direito de sorrir
          </div>
          <h1 className="max-w-5xl text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Uma jornada digital mais humana para a Turma do Bem.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-primary-foreground/88 sm:text-xl">
            O Dev do Bem conecta beneficiários, voluntários e equipe administrativa em uma experiência moderna, acessível e preparada para reduzir faltas, organizar casos e aproximar pessoas.
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild className="h-14 gap-2 rounded-full bg-accent px-7 text-base font-bold text-accent-foreground shadow-xl shadow-accent/20 hover:bg-accent/90">
              <Link to="/cadastro/beneficiario">Quero participar<ArrowRight className="h-5 w-5" aria-hidden="true" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-14 gap-2 rounded-full border-primary-foreground/30 bg-primary-foreground/5 px-7 text-base font-bold text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/cadastro/voluntario"><Users className="h-5 w-5" aria-hidden="true" />Seja voluntário</Link>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/10 p-4 backdrop-blur">
                <p className="text-2xl font-extrabold sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs leading-4 text-primary-foreground/72">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-accent/20 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] border border-primary-foreground/15 bg-primary-foreground/10 p-5 shadow-2xl shadow-primary/40 backdrop-blur">
            <div className="rounded-[1.5rem] bg-background p-6 text-foreground shadow-xl">
              <div className="flex items-center justify-between gap-4">
                <img src="/images/dev-do-bem-logo.png" alt="Dev do Bem" className="h-16 w-auto" />
                <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Plataforma integrada</div>
              </div>
              <div className="mt-8 space-y-4">
                {[
                  { icon: ShieldCheck, title: "Jornada acompanhada", text: "Status, documentos, consultas e mensagens em um só fluxo." },
                  { icon: Sparkles, title: "Experiência acolhedora", text: "Interface clara para quem precisa de orientação simples e segura." },
                  { icon: Heart, title: "Impacto mensurável", text: "Dados organizados para apoiar decisões e reduzir abandono." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 rounded-2xl border border-border/70 bg-muted/30 p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div><p className="font-bold">{item.title}</p><p className="mt-1 text-sm leading-6 text-muted-foreground">{item.text}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
