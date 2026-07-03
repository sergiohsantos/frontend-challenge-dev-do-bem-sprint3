import { ClipboardCheck, MessageCircle, Route, UserRoundCheck } from "lucide-react"

const experiences = [
  {
    id: 1,
    icon: Route,
    title: "Beneficiário",
    headline: "Sabe onde está e o que fazer agora.",
    description: "A jornada mostra próximo passo, consulta, documentos, mensagens e notificações com uma linguagem simples e acolhedora.",
  },
  {
    id: 2,
    icon: UserRoundCheck,
    title: "Voluntário",
    headline: "Acompanha casos com mais contexto.",
    description: "Agenda, histórico e comunicação ficam conectados ao atendimento, reduzindo ruído e ajudando no cuidado continuado.",
  },
  {
    id: 3,
    icon: ClipboardCheck,
    title: "Equipe TDB",
    headline: "Enxerga a operação de ponta a ponta.",
    description: "A visão integrada apoia decisões, acompanhamento de pendências e comunicação com beneficiários e voluntários.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-secondary/25 py-14 sm:py-18 lg:py-28" aria-labelledby="testimonials-heading">
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-background/80 blur-3xl" aria-hidden="true" />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center tdb-reveal">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-extrabold uppercase tracking-[0.22em] text-primary">Experiência conectada</span>
          <h2 id="testimonials-heading" className="mt-5 text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            A mesma jornada, enxergada do jeito certo por cada perfil.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            O Dev do Bem organiza a experiência para quem recebe cuidado, para quem atende e para quem coordena a rede.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {experiences.map((item, index) => (
            <article key={item.id} className={`tdb-polished-card tdb-reveal tdb-reveal-delay-${Math.min(index + 1, 3)} flex min-h-full flex-col rounded-[2rem] border border-border/70 bg-card p-6 shadow-xl shadow-primary/5`}>
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground"><item.icon className="h-7 w-7" aria-hidden="true" /></div>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-accent">{item.title}</span>
              </div>
              <h3 className="mt-6 text-2xl font-black tracking-tight text-foreground">{item.headline}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground sm:text-base">{item.description}</p>
              <div className="mt-6 flex items-center gap-2 border-t border-border pt-4 text-sm font-bold text-primary"><MessageCircle className="h-4 w-4" aria-hidden="true" />Comunicação dentro do contexto</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
