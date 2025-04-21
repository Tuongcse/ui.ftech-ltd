import { IApiResponse, IUser } from "@/types"

export interface ILoginResponse {
  access_token: string
  user: IUser
}

export interface IMeResponse {
  user: IUser
}

export type LoginResponse = IApiResponse<ILoginResponse>
export type GetMeResponse = IApiResponse<IMeResponse>
