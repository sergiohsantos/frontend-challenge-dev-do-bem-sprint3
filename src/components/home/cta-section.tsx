import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Phone, ShieldCheck, Users } from "lucide-react"

export function CTASection() {
  return (
    <section className="tdb-premium-shell relative overflow-hidden bg-primary py-14 text-primary-foreground sm:py-18 lg:py-28" aria-labelledby="cta-heading">
      <div className="tdb-orb left-[-4rem] top-10 h-72 w-72 bg-secondary" aria-hidden="true" />
      <div className="tdb-orb tdb-orb-delayed bottom-[-6rem] right-[-4rem] h-80 w-80 bg-accent" aria-hidden="true" />
      <div className="container relative mx-auto px-4">
        <div className="tdb-glass mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] p-6 text-center sm:p-8 lg:p-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-accent text-accent-foreground shadow-2xl shadow-accent/25"><Heart className="h-8 w-8" aria-hidden="true" /></div>
          <span className="mt-6 inline-flex rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-extrabold uppercase tracking-[0.22em] text-accent">Rede Turma do Bem</span>
          <h2 id="cta-heading" className="mx-auto mt-5 max-w-4xl text-3xl font-black tracking-tight sm:text-4xl lg:text-6xl">
            O cuidado continua quando cada pessoa sabe seu próximo passo.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-primary-foreground/84 sm:text-lg">
            Beneficiários recebem orientação clara, voluntários acompanham seus casos e a equipe TDB mantém a jornada organizada do início ao atendimento.
          </p>

          <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
            {[
              "Jornada acompanhada",
              "Comunicação centralizada",
              "Rede mais próxima",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-3 text-sm font-bold text-primary-foreground/90"><ShieldCheck className="mx-auto mb-2 h-5 w-5 text-secondary" aria-hidden="true" />{item}</div>
            ))}
          </div>

          <div className="mt-9 flex flex-col items-center gap-3 px-4 sm:flex-row sm:justify-center sm:gap-4 sm:px-0">
            <Button size="lg" asChild className="h-14 w-full gap-2 rounded-full bg-accent text-base font-black text-accent-foreground hover:bg-accent/90 sm:w-auto sm:min-w-[240px]"><Link to="/cadastro/beneficiario"><Heart className="h-5 w-5" aria-hidden="true" />Começar minha jornada<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></Button>
            <Button size="lg" variant="outline" asChild className="h-14 w-full gap-2 rounded-full border-primary-foreground/30 bg-transparent text-base font-black text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto sm:min-w-[240px]"><Link to="/cadastro/voluntario"><Users className="h-5 w-5" aria-hidden="true" />Atuar como voluntário</Link></Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-primary-foreground/80 sm:text-base"><Phone className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" /><span>Atendimento Turma do Bem:</span><a href="tel:08007777766" className="font-black text-primary-foreground hover:underline">0800 777 7766</a></div>
        </div>
      </div>
    </section>
  )
}
