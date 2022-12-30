import axios from "axios";

export interface AxiosResponse<T> {
  msg: string;
  code: number;
  data: T;
}


export const useAxios = axios.create({
  transformRequest: [function (data, headers) {
    // 对发送的 data 进行任意转换处理
    return data;
  }],

  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对接收的 data 进行任意转换处理
    return JSON.parse(data);
  }],
  timeout: 1000, // 默认值是 `0` (永不超时)
  responseType: 'json', // 默认值
  validateStatus: function (status) {
    return status >= 200 && status < 300; // 默认值
  },
})



export const get = (api: string, params: any = {}) => {
  return useAxios.get(api, params).then(res=>{
    return Promise.resolve(res.data);
  })
}


