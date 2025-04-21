import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type CreateAxiosDefaults,
} from "axios"
import Cookies from "js-cookie"

interface IServerError {
  detail: string
  message: string
  error: string
  errors: Record<string, string[]> | string[][]
}

export interface IHttpError {
  status?: number
  status_code?: string
  message: string
  errors: Record<string, string[]> | string[][] | undefined
}

export interface IServiceConstructorData {
  /**
   * The API Server base path, for example `/posts`
   */
  path: string
  baseUrl?: string
  auth?: () => string | undefined
}

export class Api {
  http: AxiosInstance = axios.create()

  path = ""

  /**
   * The service setting up responsibilities are:
   * - Set up the http client base url
   * @param config
   */
  constructor(config: IServiceConstructorData) {
    const { path, baseUrl, auth } = config
    this.path = path
    let Authorization = undefined
    if (typeof window !== "undefined") {
      Authorization = auth?.()
    }

    const instanceConfig: CreateAxiosDefaults = {
      headers: {
        Authorization,
      },
      baseURL: baseUrl,
    }

    this.http = axios.create(instanceConfig)
    this.http.interceptors.response.use((config) => config, this.handleError)
    this.http.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.status === 401) {
          Cookies.remove(process.env.AUTH_KEY || "token")
          location.reload()
        }
        return this.handleError(error)
      }
    )

    // Add request interceptor to include token in every request
    this.http.interceptors.request.use((config) => {
      const token = Cookies.get("token")
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    })
  }

  handleError(err: AxiosError<Partial<IServerError>>) {
    console.log(err)
    const finalError: IHttpError = {
      status: err.response?.status || err.status,
      message:
        err?.response?.data?.detail ||
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err.message,
      errors: err.response?.data.errors,
    }

    return Promise.reject(finalError)
  }

  /**
   * Overwrite GET method
   * @param config
   */
  get<T>(config: AxiosRequestConfig = {}) {
    const { url = this.path, ...requestConfig } = config
    return this.http.get<T>(url, requestConfig)
  }

  /**
   * Overwrite POST method
   * @param config
   */
  post<T>(config: AxiosRequestConfig = {}) {
    const { url = this.path, data, ...params } = config
    return this.http.post<T>(url, data, params)
  }

  /**
   * Overwrite POST FormData method
   * @param config
   */
  postFormData<T>(config: AxiosRequestConfig = {}) {
    const { url = this.path, data, ...params } = config
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    }
    return this.http.post<T>(url, data, { ...params, headers })
  }

  /**
   * Overwrite PUT method
   * @param config
   */
  put<T>(config: AxiosRequestConfig = {}) {
    const { url = this.path, data, ...requestConfig } = config

    return this.http.put<T>(url, data, requestConfig)
  }

  putFormData<T>(config: AxiosRequestConfig = {}) {
    const { url = this.path, data, ...params } = config
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    }
    return this.http.put<T>(url, data, { ...params, headers })
  }

  /**
   * Overwrite PATCH method
   * @param config
   */
  patch<T>(config: AxiosRequestConfig = {}) {
    const { url = this.path, data, ...requestConfig } = config
    return this.http.patch<T>(url, data, requestConfig)
  }

  /**
   * Overwrite DELETE method
   * @param config
   */
  delete<T>(config: AxiosRequestConfig = {}) {
    const { url = this.path, ...requestConfig } = config

    return this.http.delete<T>(url, requestConfig)
  }

  /**
   * Upload
   * @return {Promise<T>}
   * @param config
   */
  upload<T>(config: AxiosRequestConfig = {}) {
    const { url = this.path, data, ...requestConfig } = config

    return this.http.post<T>(url, data, {
      ...requestConfig,
      headers: {
        ...requestConfig.headers,
        "Content-Type": "multipart/form-data",
      },
    })
  }

  uploadFile<T>(url: string, file: File) {
    const formData = new FormData()
    formData.append("file", file)

    return this.upload<T>({ url, data: formData })
  }

  /**
   * Upload single file
   * @param {File} file
   * @param {string} url
   * @return {Promise<T>}
   */
  uploadSingleFile<T>(url: string, file: File, store_id: string) {
    const formData = new FormData()
    formData.append("file", file)
    formData.append("store_id", store_id)

    return this.upload<T>({ url, data: formData })
  }

  /**
   * Download single file
   * @param url
   * @param fileName
   */
  async downloadFile(
    url: string,
    fileName: string,
    options?: AxiosRequestConfig
  ) {
    const { data } = await this.http.get(url, {
      ...options,
      responseType: "blob",
    })

    const link = document.createElement("a")
    link.href = URL.createObjectURL(new Blob([data]))
    link.setAttribute("download", fileName)
    document.body.appendChild(link)
    link.click()
  }
}
