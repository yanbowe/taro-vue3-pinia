import { getEnv } from '@tarojs/taro';
import { ContentTypeEnum } from '@/enum';
import { getToken } from '@/utils';

const env = getEnv();

/**
 * 获取请求路径
 * @param url
 */
export function getRequestUrl(url: string) {
  let baseUrl: string;
  if (env === 'WEB') {
    baseUrl = `/api${url}`;
  } else {
    baseUrl = url.substring(0, 1) === '/' ? `${process.env.HTTP_URL}${url}` : `${url}`;
  }
  return baseUrl;
}

/** 获取请求头 */
export function getRequestHeaders(axiosConfig: Service.AxiosConfig) {
  const header: TaroGeneral.IAnyObject = {};
  /** 获取token */
  const token = getToken();
  if (token) {
    /** 添加token */
    header.Authorization = token;
  }
  /** 增加类型 */
  header['Content-Type'] = axiosConfig.contentType || ContentTypeEnum.JSON;
  return header;
}
