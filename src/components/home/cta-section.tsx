import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Heart, Phone, Users } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary py-12 text-primary-foreground sm:py-16 lg:py-24" aria-labelledby="cta-heading">
      <div className="absolute inset-0 opacity-20" aria-hidden="true"><div className="absolute -left-12 top-0 h-64 w-64 rounded-full bg-accent blur-3xl" /><div className="absolute -right-12 bottom-0 h-64 w-64 rounded-full bg-secondary blur-3xl" /></div>
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-primary-foreground/15 bg-primary-foreground/10 p-8 text-center shadow-2xl shadow-primary/30 backdrop-blur sm:p-10">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-accent">Próximo passo</span>
          <h2 id="cta-heading" className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">Participe de uma rede que transforma cuidado em sorriso.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-primary-foreground/85 sm:text-lg">Beneficiários recebem orientação clara. Voluntários acompanham seus casos. A equipe administrativa ganha uma operação mais organizada.</p>
          <div className="mt-8 flex flex-col items-center gap-3 px-4 sm:flex-row sm:justify-center sm:gap-4 sm:px-0">
            <Button size="lg" asChild className="h-14 w-full gap-2 rounded-full bg-accent text-base font-bold text-accent-foreground hover:bg-accent/90 sm:w-auto sm:min-w-[220px]"><Link to="/cadastro/beneficiario"><Heart className="h-5 w-5" aria-hidden="true" />Quero participar</Link></Button>
            <Button size="lg" variant="outline" asChild className="h-14 w-full gap-2 rounded-full border-primary-foreground/30 bg-transparent text-base font-bold text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto sm:min-w-[220px]"><Link to="/cadastro/voluntario"><Users className="h-5 w-5" aria-hidden="true" />Seja voluntário</Link></Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-primary-foreground/80 sm:text-base"><Phone className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" /><span>Precisa de ajuda?</span><a href="tel:08007777766" className="font-semibold text-primary-foreground hover:underline">0800 777 7766</a></div>
        </div>
      </div>
    </section>
  )
}
