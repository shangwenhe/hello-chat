

import { request } from 'umi';
export interface ResponseLayout<T> {
  msg: string;
  code: number;
  data: T;
}

export const get = (api: string, params: any = {}) => {
  return request(api, {params})
}
