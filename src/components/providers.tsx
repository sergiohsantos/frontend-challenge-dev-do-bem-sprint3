import { AccessibilityProvider } from "@/lib/accessibility"
import { installSelfMessageNotificationFetchFilter } from "@/lib/self-notification-fetch-filter"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  installSelfMessageNotificationFetchFilter()

  return (
    <ThemeProvider defaultTheme="system" storageKey="turma-do-bem-theme">
      <AccessibilityProvider>
        {children}
        <Toaster />
      </AccessibilityProvider>
    </ThemeProvider>
  )
}
