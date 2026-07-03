import { Github, Linkedin, Code2, Database, Bot, ShieldCheck, Sparkles, HeartHandshake } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HelpButton } from "@/components/layout/help-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const member = {
  name: "Sérgio Henrique Santos",
  rm: "RM567254",
  turma: "1TDS Agosto",
  role: "Idealização, arquitetura e desenvolvimento full stack",
  linkedinUrl: "https://www.linkedin.com/in/sergiohenriquessantos/",
  githubUrl: "https://github.com/sergiohsantos",
  photoUrl: "/team/Sergio.jpg",
  bio: "Projeto conduzido individualmente, com foco em transformar a jornada da Turma do Bem em uma experiência digital mais clara, humana e operacionalmente segura para beneficiários, voluntários e equipe administrativa.",
}

const areas = [
  { label: "Frontend Enterprise", icon: Code2 },
  { label: "Python API", icon: Code2 },
  { label: "Java e Oracle", icon: Database },
  { label: "IA e No-show", icon: Bot },
  { label: "Produto e UX", icon: Sparkles },
  { label: "Segurança e LGPD", icon: ShieldCheck },
]

const pillars = [
  {
    title: "Visão de produto",
    description: "Organização dos fluxos reais da ONG em uma plataforma simples, acolhedora e confiável.",
  },
  {
    title: "Arquitetura ponta a ponta",
    description: "Integração entre frontend, APIs, banco de dados, comunicação, notificações e painéis por perfil.",
  },
  {
    title: "Impacto social",
    description: "Tecnologia aplicada para reduzir fricção operacional e apoiar a continuidade do atendimento.",
  },
]

export default function IntegrantesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b bg-primary text-primary-foreground">
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <div className="absolute -left-20 top-12 h-72 w-72 rounded-full bg-accent blur-3xl" />
            <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-secondary blur-3xl" />
          </div>
          <div className="container relative mx-auto grid gap-10 px-4 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <Badge className="mb-5 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-primary-foreground hover:bg-primary-foreground/10">
                Projeto individual
              </Badge>
              <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Dev do Bem construído com responsabilidade, visão e execução completa.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-primary-foreground/85 sm:text-lg">
                A partir desta etapa, o projeto segue oficialmente conduzido apenas por Sérgio Henrique Santos, preservando a qualidade técnica e elevando a experiência visual e funcional da solução.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="rounded-full bg-accent px-6 text-accent-foreground hover:bg-accent/90">
                  <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild className="rounded-full border-primary-foreground/30 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10">
                  <a href={member.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>

            <Card className="overflow-hidden border-primary-foreground/15 bg-primary-foreground/10 text-primary-foreground shadow-2xl shadow-primary/30 backdrop-blur">
              <CardContent className="p-0">
                <div className="grid gap-0 sm:grid-cols-[180px_1fr]">
                  <img src={member.photoUrl} alt={member.name} className="h-full min-h-[260px] w-full object-cover" />
                  <div className="p-6 sm:p-8">
                    <Badge className="mb-4 rounded-full bg-accent text-accent-foreground hover:bg-accent">{member.rm}</Badge>
                    <h2 className="text-3xl font-bold">{member.name}</h2>
                    <p className="mt-2 text-sm uppercase tracking-[0.2em] text-primary-foreground/65">{member.turma}</p>
                    <p className="mt-4 text-base font-medium text-primary-foreground">{member.role}</p>
                    <p className="mt-4 text-sm leading-6 text-primary-foreground/78">{member.bio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Card className="border-primary/15 bg-primary/5">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <HeartHandshake className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">Responsável pelo projeto</p>
                    <h2 className="text-2xl font-bold text-foreground">Sérgio Henrique Santos</h2>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-muted-foreground">
                  A página foi ajustada para refletir a realidade atual da entrega: desenvolvimento solo, com abordagem profissional, documentação consistente e foco em uma experiência digital mais madura para a banca final.
                </p>
              </CardContent>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2">
              {areas.map((area) => (
                <Card key={area.label} className="group border-border/80 transition-all hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/10">
                  <CardContent className="flex items-center gap-3 p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <area.icon className="h-5 w-5" />
                    </div>
                    <span className="font-semibold text-foreground">{area.label}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-16">
          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="h-full border-border/80 bg-card/90">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <HelpButton />
    </div>
  )
}
