import { Link } from "react-router-dom"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, X, Phone, User, LogIn, Accessibility, ChevronDown, Heart, Smile } from "lucide-react"
import { AccessibilityPanel } from "@/components/accessibility/accessibility-panel"

const navItems = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/programas", label: "Programas" },
  { href: "/integrantes", label: "Integrantes" },
  { href: "/faq", label: "FAQ" },
  { href: "/contato", label: "Contato" },
]

const registerOptions = [
  { href: "/cadastro/beneficiario", label: "Sou beneficiário", icon: Heart },
  { href: "/cadastro/voluntario", label: "Sou voluntário", icon: Smile },
  { href: "/cadastro/apolonias", label: "Apolônias do Bem", icon: Heart },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/90 shadow-sm backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:h-20">
        <Link
          to="/"
          className="flex items-center gap-3 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="Turma do Bem - Pelo direito de sorrir"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
            <Smile className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-extrabold tracking-tight text-primary lg:text-2xl">Turma do Bem</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent lg:text-xs">Pelo direito de sorrir</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Menu principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <AccessibilityPanel />
          <div className="mx-2 h-6 w-px bg-border" aria-hidden="true" />
          <Button variant="outline" size="default" asChild className="gap-2 rounded-full border-primary/20 bg-background/80">
            <Link to="/login">
              <LogIn className="h-4 w-4" aria-hidden="true" />
              Entrar
            </Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="default" className="gap-2 rounded-full bg-accent px-5 text-accent-foreground shadow-lg shadow-accent/20 hover:bg-accent/90">
                <User className="h-4 w-4" aria-hidden="true" />
                Cadastrar
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 rounded-2xl">
              {registerOptions.map((option) => (
                <DropdownMenuItem key={option.href} asChild>
                  <Link to={option.href} className="flex cursor-pointer items-center gap-2">
                    <option.icon className="h-4 w-4 text-accent" aria-hidden="true" />
                    {option.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <AccessibilityPanel />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full" aria-label={isOpen ? "Fechar menu" : "Abrir menu"}>
                {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm p-0">
              <SheetTitle className="sr-only">Menu mobile</SheetTitle>
              <SheetDescription className="sr-only">Menu principal da plataforma</SheetDescription>
              <div className="flex h-full flex-col">
                <div className="border-b border-border p-4">
                  <div className="flex flex-col leading-none">
                    <span className="text-lg font-extrabold tracking-tight text-primary">Turma do Bem</span>
                    <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-accent">Pelo direito de sorrir</span>
                  </div>
                </div>
                <nav className="flex-1 overflow-auto p-4" aria-label="Menu mobile">
                  <ul className="space-y-2">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <Link to={item.href} onClick={() => setIsOpen(false)} className="flex min-h-14 items-center rounded-2xl px-4 text-lg font-medium text-foreground transition-colors hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-ring">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link to="/acessibilidade" onClick={() => setIsOpen(false)} className="flex min-h-14 items-center gap-2 rounded-2xl px-4 text-lg font-medium text-foreground transition-colors hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-ring">
                        <Accessibility className="h-5 w-5" aria-hidden="true" />
                        Acessibilidade
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className="space-y-3 border-t border-border p-4">
                  <Button variant="outline" size="lg" className="h-14 w-full gap-2 rounded-2xl text-base" asChild>
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <LogIn className="h-5 w-5" aria-hidden="true" />
                      Entrar
                    </Link>
                  </Button>
                  <div className="space-y-2">
                    <p className="px-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">Cadastrar</p>
                    {registerOptions.map((option) => (
                      <Button key={option.href} variant="secondary" size="lg" className="h-12 w-full justify-start gap-2 rounded-2xl text-base" asChild>
                        <Link to={option.href} onClick={() => setIsOpen(false)}>
                          <option.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                          {option.label}
                        </Link>
                      </Button>
                    ))}
                  </div>
                  <a href="tel:08007777766" className="flex items-center justify-center gap-2 rounded text-sm text-muted-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Ligue para nós: 0800 777 7766
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
