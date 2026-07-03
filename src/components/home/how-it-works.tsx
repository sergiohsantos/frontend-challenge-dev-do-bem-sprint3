import { Calendar, CheckCircle2, ClipboardList, MessageCircle, Smile, UserCheck } from "lucide-react"

const steps = [
  { number: "01", icon: ClipboardList, title: "Cadastro recebido", description: "A pessoa inicia a solicitação e passa a enxergar uma jornada com orientação clara." },
  { number: "02", icon: UserCheck, title: "Triagem e aprovação", description: "A equipe acompanha critérios, documentos e prioridade com mais contexto." },
  { number: "03", icon: Calendar, title: "Consulta agendada", description: "O atendimento entra no fluxo de confirmação, lembrete e acompanhamento." },
  { number: "04", icon: Smile, title: "Cuidado continuado", description: "Mensagens, notificações e histórico ajudam a manter o vínculo ativo." },
]

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-background py-14 sm:py-18 lg:py-28" aria-labelledby="how-it-works-heading">
      <div className="absolute right-0 top-1/3 h-72 w-72 translate-x-1/2 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
      <div className="container relative mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="tdb-reveal lg:sticky lg:top-24">
            <span className="inline-flex rounded-full bg-accent/10 px-4 py-2 text-sm font-extrabold uppercase tracking-[0.22em] text-accent">Jornada</span>
            <h2 id="how-it-works-heading" className="mt-5 text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              A plataforma mostra o caminho antes da dúvida aparecer.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
              Beneficiário, voluntário e equipe TDB caminham com a mesma visão: etapa atual, pendências, mensagens e próximos movimentos.
            </p>
            <div className="mt-7 rounded-[2rem] border border-primary/10 bg-primary p-5 text-primary-foreground shadow-2xl shadow-primary/20">
              <MessageCircle className="h-7 w-7 text-accent" aria-hidden="true" />
              <p className="mt-4 text-xl font-black">Comunicação que acompanha a etapa</p>
              <p className="mt-2 text-sm leading-6 text-primary-foreground/80">Cada mensagem faz mais sentido quando aparece no contexto da jornada.</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-7 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-primary via-secondary to-accent sm:block" aria-hidden="true" />
            <div className="grid gap-5">
              {steps.map((step, index) => (
                <article key={step.number} className={`tdb-polished-card tdb-reveal tdb-reveal-delay-${Math.min(index + 1, 3)} relative rounded-[2rem] border border-border/70 bg-card p-5 shadow-lg shadow-primary/5 sm:ml-16 sm:p-6`}>
                  <div className="absolute -left-[4.5rem] top-6 hidden h-14 w-14 items-center justify-center rounded-2xl bg-background p-1 shadow-lg sm:flex">
                    <div className="flex h-full w-full items-center justify-center rounded-2xl bg-primary text-primary-foreground"><step.icon className="h-6 w-6" aria-hidden="true" /></div>
                  </div>
                  <div className="flex items-start gap-4 sm:hidden">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground"><step.icon className="h-6 w-6" aria-hidden="true" /></div>
                    <div>
                      <span className="text-xs font-black uppercase tracking-[0.18em] text-accent">Etapa {step.number}</span>
                      <h3 className="mt-1 text-xl font-black text-foreground">{step.title}</h3>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <span className="text-xs font-black uppercase tracking-[0.18em] text-accent">Etapa {step.number}</span>
                    <h3 className="mt-1 text-2xl font-black tracking-tight text-foreground">{step.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">{step.description}</p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-success/10 px-3 py-1 text-xs font-black text-success"><CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />Acompanhamento visível</div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
