import { IUserChat, IUserInfo } from "@/interface/user";
import { ResponseLayout, get } from "./request.config";

export const getChart = (id: number): Promise<ResponseLayout<IUserChat[]>> => {
  return get(`/api/user/chart/${id}`)
}

export const getCurrentUser = (): Promise<ResponseLayout<IUserInfo>> => {
  return get(`/api/current-user`)
}
