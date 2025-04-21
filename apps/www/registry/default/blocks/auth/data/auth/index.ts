import { GetMeResponse, IApiResponse, LoginResponse } from "@/types"
import { handleApiResponse } from "@/utils/api-utils"
import { LoginFormValues } from "@/validations/auth"
import { useMutation, useQuery } from "@tanstack/react-query"
import Cookies from "js-cookie"

import { Model } from "../../data"
import { IServiceConstructorData } from "../core/net"

function getToken() {
  const token = Cookies.get("token")
  if (!token) return
  return `Bearer ${token}`
}

// Define interface for reset password request
export interface IResetPasswordRequest {
  token: string
  password: string
}

// export interface IAuth {}

export class Auth extends Model {
  static login(body: { email: string; password: string }) {
    return this.api
      .post<LoginResponse>({
        url: `/login`,
        data: body,
      })
      .then((r) => handleApiResponse(r.data))
  }

  static getMe() {
    return this.api
      .get<GetMeResponse>({
        url: `/me`,
      })
      .then((r) => handleApiResponse(r.data))
  }

  static forgotPassword(email: string) {
    return this.api
      .post<IApiResponse<unknown>>({
        url: `/forgot-password`,
        data: { email },
      })
      .then((r) => handleApiResponse(r.data))
  }

  static resetPassword(data: IResetPasswordRequest) {
    return this.api
      .post<IApiResponse<unknown>>({
        url: `/reset-password`,
        data,
      })
      .then((r) => handleApiResponse(r.data))
  }

  static logout() {
    Cookies.remove("token")
    return Promise.resolve({ success: true })
  }
}

const modelConfig: IServiceConstructorData = {
  path: "/",
  baseUrl: process.env.NEXT_PUBLIC_API_URL || "https://wtms.ftech.ltd/api",
  auth: getToken,
}

Auth.setup(modelConfig)

export function useLogin() {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: LoginFormValues) => Auth.login(data),
  })
}

export function useGetMe() {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: () => Auth.getMe(),
    refetchOnWindowFocus: false,
  })
}

export function useForgotPassword() {
  return useMutation({
    mutationKey: ["forgotPassword"],
    mutationFn: (email: string) => Auth.forgotPassword(email),
  })
}

export function useResetPassword() {
  return useMutation({
    mutationKey: ["resetPassword"],
    mutationFn: (data: IResetPasswordRequest) => Auth.resetPassword(data),
  })
}

export function useLogout() {
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: () => Auth.logout(),
  })
}

// Keeping these for backward compatibility
export function useUpdateAuth(id: string, data: Record<string, unknown>) {
  return useMutation({
    mutationKey: ["updateAuth", id],
    mutationFn: () => Auth.update(id, data),
  })
}

export function useDeleteAuth(id: string) {
  return useMutation({
    mutationKey: ["deleteAuth", id],
    mutationFn: () => Auth.delete(id),
  })
}
