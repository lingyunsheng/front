import http from "http";
import https from "http";
import qs from "qs";
import { AxiosResponse, AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  // 配置baseURL
  baseURL: "/",
  // 请求后数据处理
  transformResponse: [
    function(data: AxiosResponse) {
      return data;
    }
  ],
  // 查询对象序列化函数
  paramsSerializer: function(params: any) {
    return qs.strigify(params);
  },
  // 超时设置
  timeout: 30000,
  // 跨域是否携带cookie
  withCredentials: true,
  responseType: "json",
  // 设置xsrf
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  // 最多转发数
  maxRedirects: 5,
  // 最大响应数据大小
  maxContentLength: 2000,
  // 自定义错误状态码范围
  validateStatus: function(status: number) {
    return status >= 200 && status < 300;
  },
  // 用于node
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true })
};

export default axiosConfig;
