import { IUserChat } from "@/interface/user";
import { AxiosResponse, get, useAxios } from "./useAxios";

export const getChart = (id: number): Promise<AxiosResponse<IUserChat[]>> => {
  return get(`/api/chart/${id}`)
}
