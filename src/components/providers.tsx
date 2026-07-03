import { AccessibilityProvider } from "@/lib/accessibility"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="turma-do-bem-theme">
      <AccessibilityProvider>
        {children}
        <Toaster />
      </AccessibilityProvider>
    </ThemeProvider>
  )
}
