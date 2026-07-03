import { Quote } from "lucide-react"

const testimonials = [
  { id: 1, quote: "A plataforma me ajuda a entender o que acontece no atendimento e qual é o próximo passo.", author: "Beneficiário", role: "Jornada de cuidado", location: "São Paulo, SP" },
  { id: 2, quote: "Ter mensagens, confirmação e histórico em um só lugar reduz ruído e facilita a atuação voluntária.", author: "Voluntário", role: "Rede de atendimento", location: "Brasil" },
  { id: 3, quote: "A visão integrada apoia decisões melhores e dá mais segurança para acompanhar cada caso.", author: "Equipe TDB", role: "Gestão operacional", location: "Administração" },
]

export function TestimonialsSection() {
  return (
    <section className="bg-secondary/30 py-12 sm:py-16 lg:py-24" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Experiência</span>
          <h2 id="testimonials-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">Menos ruído, mais cuidado acompanhado.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">A comunicação foi pensada para ser simples, direta e útil para quem recebe, executa e administra o atendimento.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.id} className="flex flex-col rounded-3xl border border-border/70 bg-card p-6 shadow-md shadow-primary/5">
              <Quote className="h-8 w-8 text-accent" aria-hidden="true" />
              <p className="mt-4 flex-1 text-base leading-7 text-foreground">“{testimonial.quote}”</p>
              <footer className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-base font-bold text-primary">{testimonial.author.charAt(0)}</div>
                <div className="min-w-0"><p className="truncate font-semibold text-foreground">{testimonial.author}</p><p className="truncate text-xs text-muted-foreground sm:text-sm">{testimonial.role} • {testimonial.location}</p></div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
