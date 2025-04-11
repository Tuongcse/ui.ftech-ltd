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
  // create
  static create(data: any) {
    return this.api.post({
      url: this.path,
      data,
    })
  }
  static get(id: string) {
    return this.api.get({
      url: `${this.path}/${id}`,
    })
  }
  // update
  static update(id: string, data: any) {
    return this.api.put({
      url: `${this.path}/${id}`,
      data,
    })
  }
  // delete
  static delete(id: string) {
    return this.api.delete({
      url: `${this.path}/${id}`,
    })
  }
  // list
  static list(params: any) {
    return this.api.get({
      url: this.path,
      params,
    })
  }
}
