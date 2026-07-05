import type { AuthUser } from "@/lib/auth"
import { normalizeRole } from "@/lib/auth"

type NotificationRecord = Record<string, unknown>

const CONTAINER_KEYS = ["metadata", "meta", "data", "payload", "context"]
const SELF_BOOLEAN_KEYS = ["isSelf", "self", "fromCurrentUser", "sentByMe", "isSenderCurrentUser", "createdByCurrentUser"]
const SENDER_ID_KEYS = ["senderId", "sender_id", "fromUserId", "from_user_id", "actorId", "actor_id", "createdById", "created_by_id", "authorId", "author_id"]
const SENDER_ROLE_KEYS = ["senderRole", "sender_role", "senderType", "sender_type", "fromRole", "from_role", "fromType", "from_type", "actorRole", "actor_role", "actorType", "actor_type", "createdByRole", "created_by_role"]
const SENDER_NAME_KEYS = ["senderName", "sender_name", "fromName", "from_name", "from", "actorName", "actor_name", "createdByName", "created_by_name", "authorName", "author_name"]
const SENDER_EMAIL_KEYS = ["senderEmail", "sender_email", "fromEmail", "from_email", "actorEmail", "actor_email", "createdByEmail", "created_by_email", "authorEmail", "author_email"]

function normalizeText(value: unknown): string {
  return String(value ?? "").trim().toLowerCase()
}

function normalizeComparable(value: unknown): string {
  return normalizeText(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

function collectSources(raw: NotificationRecord): NotificationRecord[] {
  const sources: NotificationRecord[] = [raw]
  for (const key of CONTAINER_KEYS) {
    const value = raw[key]
    if (value && typeof value === "object" && !Array.isArray(value)) {
      sources.push(value as NotificationRecord)
    }
  }
  return sources
}

function firstValue(sources: NotificationRecord[], keys: string[]): unknown {
  for (const source of sources) {
    for (const key of keys) {
      if (source[key] !== undefined && source[key] !== null && source[key] !== "") {
        return source[key]
      }
    }
  }
  return undefined
}

function anyTrue(sources: NotificationRecord[], keys: string[]): boolean {
  return keys.some((key) => sources.some((source) => source[key] === true || source[key] === "true" || source[key] === 1 || source[key] === "1"))
}

function sameId(left: unknown, right: unknown): boolean {
  const a = normalizeText(left)
  const b = normalizeText(right)
  return !!a && !!b && a === b
}

function sameEmail(left: unknown, right: unknown): boolean {
  const a = normalizeText(left)
  const b = normalizeText(right)
  return !!a && !!b && a === b
}

function sameName(left: unknown, right: unknown): boolean {
  const a = normalizeComparable(left)
  const b = normalizeComparable(right)
  return !!a && !!b && a === b
}

function isSelfText(title: unknown, message: unknown, description: unknown): boolean {
  const text = normalizeComparable([title, message, description].filter(Boolean).join(" "))
  return [
    "voce enviou",
    "mensagem enviada por voce",
    "mensagem enviada por você",
    "enviada por voce",
    "enviado por voce",
    "sent by you",
    "you sent",
  ].some((pattern) => text.includes(normalizeComparable(pattern)))
}

export function isSelfMessageNotification(raw: NotificationRecord, user: AuthUser | null, currentRole: "beneficiario" | "voluntario"): boolean {
  if (normalizeText(raw.type) !== "message") return false

  const sources = collectSources(raw)
  if (anyTrue(sources, SELF_BOOLEAN_KEYS)) return true

  const senderId = firstValue(sources, SENDER_ID_KEYS)
  if (sameId(senderId, user?.id)) return true

  const senderEmail = firstValue(sources, SENDER_EMAIL_KEYS)
  if (sameEmail(senderEmail, user?.email)) return true

  const senderName = firstValue(sources, SENDER_NAME_KEYS)
  const userName = user?.full_name || user?.name
  const senderRole = normalizeRole(String(firstValue(sources, SENDER_ROLE_KEYS) ?? ""))
  const userRole = normalizeRole(user?.role || currentRole)

  if (senderRole === userRole && sameName(senderName, userName)) return true
  if (!senderRole && sameName(senderName, userName)) return true

  return isSelfText(raw.title, raw.message, raw.description)
}

export function filterSelfMessageNotifications<T extends NotificationRecord>(items: T[], user: AuthUser | null, currentRole: "beneficiario" | "voluntario"): T[] {
  return items.filter((item) => !isSelfMessageNotification(item, user, currentRole))
}
