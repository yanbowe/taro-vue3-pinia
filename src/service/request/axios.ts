import { request, showToast, getEnv } from '@tarojs/taro';
import { ContentTypeEnum } from '@/enum';
import { getToken, removeToken } from '@/utils';
import type { Method, Config } from '@/interface';

const env = getEnv();

// eslint-disable-next-line max-params
async function axios<T = any>(
  url: string,
  method: Method,
  extend: Config,
  data = {}
): Promise<Service.RequestResult<T>> {
  let baseUrl: string;
  if (env === 'WEB') {
    baseUrl = `/api${url}`;
  } else {
    baseUrl = url.substring(0, 1) === '/' ? `${process.env.HTTP_URL}${url}` : `${url}`;
  }
  const header: any = {};

  /** 增加类型 */
  header['Content-Type'] = extend.contentType || ContentTypeEnum.JSON;
  /** 获取token */
  const token = getToken();

  if (token) {
    /** 添加token */
    header.Authorization = token;
  }
  return await new Promise((resolve, reject) => {
    request({
      /** 兼容Url不同的情况，可以通过填写完整路径 */
      url: baseUrl,
      method,
      /** 对所有请求添加时间戳以防止缓存 */
      data: { _t: Date.now(), ...data },
      header,
      success: res => {
        const { code, message, result } = res.data as Service.BackendResultConfig<T>;
        /* 成功请求 */
        if (code === 200) {
          return resolve({
            error: null,
            success: result
          });
        }
        switch (code) {
          // 登录态丢失
          case 1012:
            removeToken();
            // return Taro.reLaunch({
            //   url: '/pages/login/login'
            // });
            break;
          default:
            // 仅有使用服务端错误信息的请求才 toast 提示错误
            if (extend.useErrMsg) {
              showToast({
                title: message,
                icon: 'none',
                duration: 2000
              });
            }
        }
        return resolve({
          error: {
            message,
            errorCode: code
          },
          success: null
        });
      },
      fail: err => {
        reject(err);
      },
      complete: () => {
        //
      }
    });
  });
}

export default axios;
