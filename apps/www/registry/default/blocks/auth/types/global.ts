export interface IMeta {
  page: number
  size: number
  total: number
}

// Base response model for all API responses
export interface IApiResponse<T> {
  status: "success" | "error"
  data: T | null
  error_message: string
  error_code: string | number
}

export interface IListData<T> {
  items: T[]
  limit: number
  page: number
  total: number
}

export type GetListResponse<T> = IApiResponse<IListData<T>>

export type TableState = {
  filters: Record<string, string>
  sortBy?: string
  sortDirection?: "asc" | "desc"
}
