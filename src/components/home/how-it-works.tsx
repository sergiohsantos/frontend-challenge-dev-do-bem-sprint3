import { Calendar, ClipboardList, Smile, UserCheck } from "lucide-react"

const steps = [
  { number: 1, icon: ClipboardList, title: "Cadastro recebido", description: "A pessoa inicia sua solicitação com dados básicos e orientações claras." },
  { number: 2, icon: UserCheck, title: "Triagem e aprovação", description: "A equipe avalia critérios, documentos e prioridade de atendimento." },
  { number: 3, icon: Calendar, title: "Consulta agendada", description: "O voluntário é indicado e a consulta passa a ser acompanhada pela plataforma." },
  { number: 4, icon: Smile, title: "Cuidado continuado", description: "Mensagens, confirmações e notificações ajudam a manter a jornada ativa." },
]

export function HowItWorks() {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-24" aria-labelledby="how-it-works-heading">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-accent">Jornada</span>
          <h2 id="how-it-works-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">Do cadastro ao atendimento, cada etapa precisa ser compreensível.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">A proposta visual deixa o fluxo mais claro para beneficiários, voluntários e administração, sem criar regras de negócio novas.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative rounded-3xl border border-border/70 bg-card p-6 shadow-md shadow-primary/5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground"><step.icon className="h-7 w-7" aria-hidden="true" /></div>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-accent-foreground">{step.number}</span>
              </div>
              <h3 className="mt-5 text-lg font-extrabold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
