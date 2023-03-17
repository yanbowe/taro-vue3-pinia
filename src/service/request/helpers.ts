import { getEnv, getAccountInfoSync } from '@tarojs/taro';
import { ContentTypeEnum } from '@/enum';
import { getToken, exeStrategyActions } from '@/utils';

const env = getEnv();

/**
 * 获取请求路径
 * @param url
 */
export function getRequestUrl(url: string) {
  let baseUrl = '';
  const actions: Common.StrategyAction[] = [
    [env === 'WEB', () => (baseUrl = `/api${url}`)],
    [
      env === 'WEAPP',
      () => {
        const { miniProgram } = getAccountInfoSync();
        const hosts = {
          develop: 'https://getman.cn/mock', // 开发
          trial: 'https://getman.cn/mock', // 体验
          release: 'https://getman.cn/mock' // 正式
        };
        baseUrl = url.substring(0, 1) === '/' ? `${hosts[miniProgram.envVersion]}${url}` : `${url}`;
      }
    ],
    [
      true,
      () => {
        baseUrl = url.substring(0, 1) === '/' ? `${process.env.HTTP_URL}${url}` : `${url}`;
      }
    ]
  ];
  exeStrategyActions(actions);
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
