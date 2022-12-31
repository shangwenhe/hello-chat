import { IChatInfo } from "@/interface/chat";
import { ResponseLayout, get } from "./request.config";


export const getWeChartList = (): Promise<ResponseLayout<IChatInfo[]>> => {
  return get(`/api/chart/list`)
}
