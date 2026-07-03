import { Building2, CheckCircle2, HeartHandshake, Smile, TrendingUp, Users } from "lucide-react"

const stats = [
  { icon: Smile, value: "+90.000", label: "jovens atendidos", description: "Histórias acompanhadas por uma rede nacional de cuidado." },
  { icon: Users, value: "+18.000", label: "voluntários", description: "Profissionais conectados a jornadas reais de transformação." },
  { icon: Building2, value: "+1.300", label: "municípios", description: "Presença distribuída, com operação organizada por território." },
]

const gains = [
  "Próximo passo claro para quem está em atendimento",
  "Comunicação centralizada entre beneficiário, voluntário e equipe",
  "Histórico organizado para reduzir ruído operacional",
]

export function ImpactSection() {
  return (
    <section className="relative overflow-hidden bg-background py-14 sm:py-18 lg:py-28" aria-labelledby="impact-heading">
      <div className="absolute left-0 top-16 h-64 w-64 -translate-x-1/2 rounded-full bg-secondary/20 blur-3xl" aria-hidden="true" />
      <div className="container relative mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="tdb-reveal">
            <span className="inline-flex rounded-full bg-accent/10 px-4 py-2 text-sm font-extrabold uppercase tracking-[0.22em] text-accent">Impacto em movimento</span>
            <h2 id="impact-heading" className="mt-5 max-w-2xl text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-6xl">
              Cada dado conta uma jornada que precisa continuar.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              A plataforma organiza atendimento, comunicação e acompanhamento para que a rede enxergue o que importa: pessoas, vínculos, presença e continuidade.
            </p>

            <div className="mt-8 rounded-[2rem] border border-border/70 bg-card p-5 shadow-xl shadow-primary/5 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground"><HeartHandshake className="h-6 w-6" aria-hidden="true" /></div>
                <div>
                  <p className="font-black text-foreground">Cuidado com rastreabilidade</p>
                  <p className="text-sm leading-6 text-muted-foreground">Do cadastro ao atendimento, cada etapa ganha contexto e orientação.</p>
                </div>
              </div>
              <div className="mt-5 grid gap-3">
                {gains.map((gain) => (
                  <div key={gain} className="flex items-start gap-3 rounded-2xl bg-muted/40 p-3 text-sm font-semibold text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                    {gain}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat, index) => (
              <article key={stat.label} className={`tdb-polished-card tdb-reveal tdb-reveal-delay-${Math.min(index + 1, 3)} relative overflow-hidden rounded-[2rem] border border-border/70 bg-card p-6 shadow-lg shadow-primary/5`}>
                <div className="absolute right-0 top-0 h-28 w-28 translate-x-8 -translate-y-8 rounded-full bg-secondary/20 blur-2xl" aria-hidden="true" />
                <div className="relative flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground"><stat.icon className="h-7 w-7" aria-hidden="true" /></div>
                  <div>
                    <p className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">{stat.value}</p>
                    <p className="mt-1 font-extrabold text-foreground">{stat.label}</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{stat.description}</p>
                  </div>
                </div>
              </article>
            ))}

            <article className="tdb-polished-card relative overflow-hidden rounded-[2rem] border border-primary/15 bg-primary p-6 text-primary-foreground shadow-2xl shadow-primary/20 sm:col-span-3 lg:col-span-1">
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-accent/30 blur-3xl" aria-hidden="true" />
              <TrendingUp className="relative h-8 w-8 text-accent" aria-hidden="true" />
              <p className="relative mt-4 text-2xl font-black">Operação mais próxima da vida real</p>
              <p className="relative mt-2 text-sm leading-6 text-primary-foreground/82">Consultas, documentos, notificações e mensagens deixam de ser pontos soltos e passam a compor uma jornada acompanhada.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
