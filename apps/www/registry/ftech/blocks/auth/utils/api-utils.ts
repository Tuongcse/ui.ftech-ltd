import { IApiResponse } from "@/types"

export function handleApiResponse<T>(response: IApiResponse<T>): T | null {
  if (response.status === "error") {
    throw new Error(response.error_message || "An unknown error occurred")
  }

  return response.data
}

/**
 * Safely access localStorage to avoid SSR issues
 */
export const safeLocalStorage = {
  setItem: <T>(key: string, value: T): void => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value))
    }
  },
  getItem: <T>(key: string): T | null => {
    if (typeof window !== "undefined") {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    }
    return null
  },
  removeItem: (key: string): void => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key)
    }
  },
}
