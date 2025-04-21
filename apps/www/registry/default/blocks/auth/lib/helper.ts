import dayjs from "dayjs"
import numeral from "numeral"

// Split helpers into categories for better organization and maintainability.

// Number formatting helper
export function formatNumber(value: number, format: string = "0,0"): string {
  return numeral(value).format(format)
}

// Date-time formatting helper
export function formatDate(
  date: string | Date,
  format: string = "YYYY-MM-DD"
): string {
  return dayjs(date).format(format)
}

// Array Helpers
export function removeDuplicates<T>(array: T[]): T[] {
  return Array.from(new Set(array))
}

export function arrayIntersection<T>(array1: T[], array2: T[]): T[] {
  return array1.filter((value) => array2.includes(value))
}

// Local Storage Helpers
export function saveToLocalStorage<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value))
}

export function getFromLocalStorage<T>(key: string): T | null {
  const item = localStorage.getItem(key)
  return item ? JSON.parse(item) : null
}

// Validation Helpers
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isValidURL(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

// String Manipulation Helpers
export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function toCamelCase(str: string): string {
  return str
    .replace(/[-_](.)/g, (_, char) => char.toUpperCase())
    .replace(/^(.)/, (_, char) => char.toLowerCase())
}

export function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase()
}

// Singapore phone number regex pattern
// Accepts formats: +65 XXXX XXXX, +65XXXXXXXX, 8XXX XXXX, 9XXX XXXX, etc.
export const SINGAPORE_PHONE_REGEX = /^(\+65[ -]?)?[89]\d{3}[ -]?\d{4}$/
