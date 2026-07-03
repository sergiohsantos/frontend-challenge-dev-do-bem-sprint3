import { Link } from "react-router-dom"
import type { ReactNode } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VolunteerPageHeroProps {
  eyebrow: string
  title: string
  description: string
  icon: ReactNode
  backTo?: string
  backLabel?: string
  primaryAction?: ReactNode
  secondaryAction?: ReactNode
  meta?: ReactNode
}

export function VolunteerPageHero({
  eyebrow,
  title,
  description,
  icon,
  backTo = "/dashboard/voluntario",
  backLabel = "Voltar ao painel",
  primaryAction,
  secondaryAction,
  meta,
}: VolunteerPageHeroProps) {
  return (
    <section className="tdb-premium-shell relative mb-8 overflow-hidden rounded-[2.5rem] bg-primary p-6 text-primary-foreground shadow-2xl shadow-primary/20 lg:p-8">
      <div className="tdb-orb -left-16 top-4 h-56 w-56 bg-secondary" aria-hidden="true" />
      <div className="tdb-orb tdb-orb-delayed -right-16 bottom-0 h-64 w-64 bg-accent" aria-hidden="true" />
      <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <Button variant="ghost" size="sm" asChild className="mb-5 -ml-2 rounded-full text-primary-foreground/86 hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Link to={backTo}>
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              {backLabel}
            </Link>
          </Button>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-accent">
            {icon}
            {eyebrow}
          </div>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-primary-foreground/84">{description}</p>
          {meta ? <div className="mt-5 flex flex-wrap gap-2 text-sm text-primary-foreground/82">{meta}</div> : null}
        </div>
        {(primaryAction || secondaryAction) && (
          <div className="grid min-w-full gap-3 sm:min-w-[420px] sm:grid-cols-2 lg:min-w-[390px]">
            {primaryAction}
            {secondaryAction}
          </div>
        )}
      </div>
    </section>
  )
}
