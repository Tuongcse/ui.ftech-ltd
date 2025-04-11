import { useMutation, useQuery } from "@tanstack/react-query"
import Cookies from "js-cookie"

import { Model } from "../../data"
import { IServiceConstructorData } from "../core/net"

function getToken() {
  let token = Cookies.get("token")
  if (!token) return
  return `Bearer ${token}`
}

export interface IModule {}

export class Module extends Model {}

const modelConfig: IServiceConstructorData = {
  path: "/",
  baseUrl: process.env.API_URL || "http://localhost:8080",
  auth: getToken,
}

Module.setup(modelConfig)

export function useCreateModule(data: any) {
  return useMutation({
    mutationKey: ["createModule"],
    mutationFn: () => Module.create(data),
  })
}

export function useGetModule(id: string) {
  return useQuery({
    queryKey: ["getModule", id],
    queryFn: () => Module.get(id),
  })
}

export function useUpdateModule(id: string, data: any) {
  return useMutation({
    mutationKey: ["updateModule", id],
    mutationFn: () => Module.update(id, data),
  })
}

export function useDeleteModule(id: string) {
  return useMutation({
    mutationKey: ["deleteModule", id],
    mutationFn: () => Module.delete(id),
  })
}
