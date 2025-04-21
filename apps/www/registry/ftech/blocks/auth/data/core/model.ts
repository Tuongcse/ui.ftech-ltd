/* eslint-disable @typescript-eslint/no-explicit-any */
import { Api, type IServiceConstructorData } from "../core/net"

/**
 * Core model, every model extend this class have a static init method use to implement http service adapter,
 * that's all
 */
export class Model {
  static api: Api
  static path: string
  static setup(
    modelConfig: IServiceConstructorData = {
      path: "",
    }
  ) {
    this.api = new Api(modelConfig)
    this.path = modelConfig.path
  }
  // create user
  static create<T>(data: any) {
    return this.api.post<T>({
      url: this.path,
      data,
    })
  }
  static get<T>(id: string) {
    return this.api.get<T>({
      url: `${this.path}/${id}`,
    })
  }
  // update
  static update<T>(id: string, data: any) {
    return this.api.put<T>({
      url: `${this.path}/${id}`,
      data,
    })
  }
  // delete
  static delete<T>(id: string) {
    return this.api.delete<T>({
      url: `${this.path}/${id}`,
    })
  }
  // list
  static list<T>(params: any) {
    return this.api.get<T>({
      url: this.path,
      params,
    })
  }
}
