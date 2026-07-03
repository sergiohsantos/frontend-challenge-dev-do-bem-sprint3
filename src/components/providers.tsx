import { AccessibilityProvider } from "@/lib/accessibility"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { AgendaPolishStyle } from "@/components/dashboard/agenda-polish-style"

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="turma-do-bem-theme">
      <AccessibilityProvider>
        <AgendaPolishStyle />
        {children}
        <Toaster />
      </AccessibilityProvider>
    </ThemeProvider>
  )
}
