import { HeartHandshake, ShieldCheck, Smile, Sparkles, Target, Users } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HelpButton } from "@/components/layout/help-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const highlights = [
  { icon: HeartHandshake, title: "Impacto social", description: "Apoia a missão da Turma do Bem ao facilitar o cuidado contínuo de crianças, adolescentes e mulheres em situação de vulnerabilidade." },
  { icon: Users, title: "Experiência integrada", description: "Une beneficiário, voluntário e administração em uma plataforma mais clara, com regras alinhadas ao fluxo real." },
  { icon: Smile, title: "Cuidado com a jornada", description: "Melhora mensagens, notificações, documentos, aprovações e agendamentos para reduzir fricção operacional." },
  { icon: Target, title: "Objetivo do produto", description: "Transformar a experiência digital em algo funcional, responsivo e fiel às necessidades reais da ONG." },
  { icon: ShieldCheck, title: "Organização e confiança", description: "Centraliza informações importantes com mais previsibilidade para usuários e equipe administrativa." },
  { icon: Sparkles, title: "Evolução contínua", description: "Permite melhorias incrementais sem quebrar o que já funciona no frontend e no backend." },
]

export default function SobrePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b bg-primary text-primary-foreground">
          <div className="absolute inset-0 opacity-20" aria-hidden="true"><div className="absolute -left-12 top-0 h-72 w-72 rounded-full bg-accent blur-3xl" /><div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-secondary blur-3xl" /></div>
          <div className="container relative mx-auto grid gap-10 px-4 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Badge className="mb-4 rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/10">Sobre o projeto</Badge>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Dev do Bem</h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-primary-foreground/85 sm:text-lg">Uma solução digital criada para aproximar tecnologia, impacto social e cuidado humano, fortalecendo o ecossistema da Turma do Bem com uma experiência mais organizada, acessível e acolhedora.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-4"><p className="text-sm font-bold">Propósito</p><p className="mt-2 text-sm text-primary-foreground/80">Conectar beneficiários, voluntários e administração em uma jornada clara e eficiente.</p></div>
                <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-4"><p className="text-sm font-bold">Foco</p><p className="mt-2 text-sm text-primary-foreground/80">Melhorar usabilidade, comunicação interna, documentos e acompanhamento de casos.</p></div>
              </div>
            </div>
            <div className="flex justify-center"><img src="/images/dev-do-bem-logo.png" alt="Dev do Bem" className="max-h-[360px] w-full max-w-[340px] object-contain drop-shadow-xl" /></div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 sm:py-16">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {highlights.map((item) => (
              <Card key={item.title} className="h-full">
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><item.icon className="h-6 w-6" /></div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 pb-16">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="grid gap-6 p-6 md:grid-cols-3">
              <div><p className="text-sm font-bold text-primary">Frontend</p><p className="mt-2 text-sm text-muted-foreground">React + Vite com foco em responsividade, componentes reutilizáveis e experiência consistente.</p></div>
              <div><p className="text-sm font-bold text-primary">Backend</p><p className="mt-2 text-sm text-muted-foreground">Integração orientada pelos contratos reais já existentes, preservando regras de negócio importantes.</p></div>
              <div><p className="text-sm font-bold text-primary">Resultado esperado</p><p className="mt-2 text-sm text-muted-foreground">Uma plataforma mais fiel ao processo real da ONG, com melhor usabilidade para todos os perfis.</p></div>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
      <HelpButton />
    </div>
  )
}
