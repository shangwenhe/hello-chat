import type { RequestConfig } from '@umijs/max';
import { ResponseLayout } from './api/request.config';
type APP_ENV = 'dev' | 'test' | 'prod';
enum EEnv {
  DEV = 'dev',
  TEST = 'test',
  PROD = 'prod',
}

const EBaseURL = {
  [EEnv.DEV]  : '',
  [EEnv.TEST] : '',
  [EEnv.PROD] : 'https://www-huaguan.oss-cn-hangzhou.aliyuncs.com/chat',
}

const baseURL = EBaseURL[process.env.APP_ENV as APP_ENV || 'prod'];

export const request: RequestConfig = {
  timeout: 2000,
  baseURL,
  transformRequest: [function (data: any) {
    // 对发送的 data 进行任意转换处理
    return data;
  }],

  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对接收的 data 进行任意转换处理
    const JSONData: ResponseLayout<any> = JSON.parse(data);

    // 对业务端状态码进行处理
    if (JSONData.code === 200) {
      return JSONData;
    }

  }],
  // responseType: 'json', // 默认值
  validateStatus: function (status) {
    return status >= 200 && status < 300; // 默认值
  },

  errorConfig: {
    errorHandler(){
    },
    errorThrower(){
    }
  },
  requestInterceptors: [],
  responseInterceptors: []
};
