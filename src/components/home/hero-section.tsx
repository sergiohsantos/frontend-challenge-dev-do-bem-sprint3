import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight, CalendarCheck2, FileText, Heart, MessageCircle, ShieldCheck, Sparkles, Users } from "lucide-react"

const stats = [
  { value: "+90 mil", label: "jovens atendidos" },
  { value: "+18 mil", label: "dentistas voluntários" },
  { value: "+1.300", label: "municípios alcançados" },
  { value: "+1,2 mil", label: "mulheres acolhidas" },
]

const journey = [
  { icon: CalendarCheck2, title: "Próxima consulta", text: "Confirmação pendente hoje", tone: "bg-accent text-accent-foreground" },
  { icon: FileText, title: "Documentos", text: "2 itens em acompanhamento", tone: "bg-secondary text-secondary-foreground" },
  { icon: MessageCircle, title: "Mensagem nova", text: "Equipe TDB respondeu", tone: "bg-primary text-primary-foreground" },
]

export function HeroSection() {
  return (
    <section className="tdb-premium-shell relative overflow-hidden bg-primary py-16 text-primary-foreground lg:py-24">
      <div className="tdb-orb left-[-6rem] top-16 h-72 w-72 bg-secondary" aria-hidden="true" />
      <div className="tdb-orb tdb-orb-delayed bottom-0 right-[-5rem] h-80 w-80 bg-accent" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.16),transparent_34rem)]" aria-hidden="true" />

      <div className="container relative mx-auto grid gap-12 px-4 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="tdb-reveal">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm font-semibold shadow-lg shadow-primary/20 backdrop-blur">
            <Heart className="h-4 w-4 text-accent" aria-hidden="true" />
            Plataforma social com experiência de produto premium
          </div>

          <h1 className="max-w-5xl text-balance text-4xl font-black leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
            Cuidado que guia, comunica e acompanha até o sorriso acontecer.
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-primary-foreground/88 sm:text-xl">
            O Dev do Bem transforma a jornada da Turma do Bem em uma experiência clara, acolhedora e viva: próximo passo, consulta, documento, mensagem e impacto no mesmo fluxo.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild className="h-14 gap-2 rounded-full bg-accent px-7 text-base font-extrabold text-accent-foreground shadow-2xl shadow-accent/25 hover:bg-accent/90">
              <Link to="/cadastro/beneficiario">Começar minha jornada<ArrowRight className="h-5 w-5" aria-hidden="true" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-14 gap-2 rounded-full border-primary-foreground/30 bg-primary-foreground/5 px-7 text-base font-extrabold text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/cadastro/voluntario"><Users className="h-5 w-5" aria-hidden="true" />Atuar como voluntário</Link>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`tdb-metric-pill tdb-reveal tdb-reveal-delay-${Math.min(index, 3)} rounded-3xl p-4`}>
                <p className="text-2xl font-black sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs leading-4 text-primary-foreground/72">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="tdb-reveal tdb-reveal-delay-2 relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-accent/20 blur-3xl" aria-hidden="true" />
          <div className="tdb-glass relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
            <div className="rounded-[1.5rem] bg-background p-5 text-foreground shadow-2xl sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <img src="/images/dev-do-bem-logo.png" alt="Dev do Bem" className="h-14 w-auto" />
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary/70">Meu próximo passo</p>
                  <h2 className="mt-2 text-2xl font-black tracking-tight text-foreground sm:text-3xl">Confirmar presença na consulta</h2>
                </div>
                <div className="rounded-full bg-success/12 px-3 py-1 text-xs font-bold text-success">Em andamento</div>
              </div>

              <div className="mt-6 rounded-3xl border border-border/70 bg-muted/40 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground"><ShieldCheck className="h-6 w-6" aria-hidden="true" /></div>
                  <div>
                    <p className="font-extrabold">Jornada acompanhada</p>
                    <p className="text-sm leading-6 text-muted-foreground">Orientação simples para reduzir dúvidas, faltas e ruído de comunicação.</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {journey.map((item) => (
                  <div key={item.title} className="tdb-floating-card tdb-polished-card flex items-center gap-4 rounded-2xl border border-border/70 bg-card p-4 shadow-sm">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${item.tone}`}><item.icon className="h-5 w-5" aria-hidden="true" /></div>
                    <div className="min-w-0"><p className="font-bold text-foreground">{item.title}</p><p className="truncate text-sm text-muted-foreground">{item.text}</p></div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { label: "Consulta", value: "Hoje" },
                  { label: "Status", value: "Pendente" },
                  { label: "Canal", value: "Seguro" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl bg-primary/5 p-3 text-center">
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="mt-1 text-sm font-black text-primary">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 left-4 hidden rounded-2xl border border-primary-foreground/20 bg-primary-foreground/12 px-4 py-3 text-sm font-bold text-primary-foreground shadow-2xl backdrop-blur md:flex md:items-center md:gap-2">
            <Sparkles className="h-4 w-4 text-accent" aria-hidden="true" />
            Experiência desenhada para orientar, não confundir.
          </div>
        </div>
      </div>
    </section>
  )
}
