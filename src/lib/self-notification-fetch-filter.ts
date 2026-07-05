import { getUser } from "@/lib/auth"
import { isSelfMessageNotification } from "@/lib/notification-filters"

type Role = "beneficiario" | "voluntario"

type PatchedWindow = Window & {
  __tdbSelfMessageNotificationFilterInstalled?: boolean
}

function getRequestUrl(input: RequestInfo | URL): string {
  if (typeof input === "string") return input
  if (input instanceof URL) return input.toString()
  return input.url
}

function getRequestMethod(input: RequestInfo | URL, init?: RequestInit): string {
  if (init?.method) return init.method.toUpperCase()
  if (typeof input !== "string" && !(input instanceof URL)) return input.method.toUpperCase()
  return "GET"
}

function getNotificationsRole(url: string): Role | null {
  if (url.includes("/api/beneficiaries/me/notifications")) return "beneficiario"
  if (url.includes("/api/volunteers/me/notifications")) return "voluntario"
  return null
}

function filterItems(items: unknown[], role: Role): unknown[] {
  const user = getUser()
  return items.filter((item) => {
    if (!item || typeof item !== "object" || Array.isArray(item)) return true
    return !isSelfMessageNotification(item as Record<string, unknown>, user, role)
  })
}

function filterPayload(data: unknown, role: Role): unknown {
  if (Array.isArray(data)) return filterItems(data, role)
  if (!data || typeof data !== "object" || Array.isArray(data)) return data

  const record = data as Record<string, unknown>
  const next = { ...record }
  let changed = false

  for (const key of ["notifications", "items"] as const) {
    if (Array.isArray(record[key])) {
      next[key] = filterItems(record[key], role)
      changed = true
    }
  }

  return changed ? next : data
}

export function installSelfMessageNotificationFetchFilter(): void {
  if (typeof window === "undefined") return

  const win = window as PatchedWindow
  if (win.__tdbSelfMessageNotificationFilterInstalled) return

  const originalFetch = window.fetch.bind(window)

  window.fetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
    const response = await originalFetch(input, init)

    try {
      const url = getRequestUrl(input)
      const method = getRequestMethod(input, init)
      const role = getNotificationsRole(url)

      if (!response.ok || method !== "GET" || !role) return response

      const cloned = response.clone()
      const data = await cloned.json()
      const filtered = filterPayload(data, role)

      return new Response(JSON.stringify(filtered), {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      })
    } catch {
      return response
    }
  }

  win.__tdbSelfMessageNotificationFilterInstalled = true
}
