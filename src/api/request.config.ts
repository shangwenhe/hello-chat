

import { request } from '@umijs/max';
export interface ResponseLayout<T> {
  msg: string;
  code: number;
  data: T;
}

export const get = (api: string, params: any = {}) => {
  return request(api, {params})
}
