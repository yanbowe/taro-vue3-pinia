import { RequestEnum, ContentTypeEnum } from '@/enum';
import type { Config } from '@/interface';
import axios from './axios';

/** 暂时只封装get和 post请求 */
async function get<T = any>(url: string, params = {}, config: Config = {}) {
  const extend: Config = {
    useErrMsg: false,
    ...config
  };

  return await axios<T>(url, RequestEnum.GET, extend, params);
}

async function post<T = any>(url: string, data = {}, config: Config = {}) {
  const extend: Config = {
    useErrMsg: false,
    contentType: ContentTypeEnum.JSON,
    ...config
  };
  return await axios<T>(url, RequestEnum.POST, extend, data);
}

export { get, post };
