import { RequestEnum, ContentTypeEnum } from '@/enum';
import { Config } from '@/interface';
import axios from './axios';

/** 暂时只封装get和 post请求 */
async function get(url: string, params = {}, config: Config = {}) {
  const extend: Config = {
    useErrMsg: false,
    ...config
  };

  return await axios(url, RequestEnum.GET, extend, params);
}

async function post(url: string, data = {}, config: Config = {}) {
  const extend: Config = {
    useErrMsg: false,
    contentType: ContentTypeEnum.JSON,
    ...config
  };
  return await axios(url, RequestEnum.POST, extend, data);
}

export { get, post };
