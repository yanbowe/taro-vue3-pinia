import { request } from '@tarojs/taro';
import { REQUEST_TIMEOUT, SUCCESS_CODE, REFRESH_TOKEN_CODE } from '@/constants';
import { getRequestUrl, getRequestHeaders, handleExpireToken, showErrorMsg } from './helpers';

async function axios<T>(config: Service.RequestParam): Promise<Service.RequestResult<T>> {
  const { method, url, data } = config;
  const axiosConfig = config.axiosConfig as Service.AxiosConfig;
  const header = getRequestHeaders(axiosConfig);
  return await new Promise((resolve, reject) => {
    request({
      /** 兼容Url不同的情况，可以通过填写完整路径 */
      url: getRequestUrl(url),
      method,
      /** 对所有请求添加时间戳以防止缓存 */
      data: { _t: Date.now(), ...data },
      header,
      timeout: REQUEST_TIMEOUT,
      success: res => {
        const { code, message, result } = res.data as Service.BackendResultConfig<T>;
        /* 成功请求 */
        if (code === SUCCESS_CODE) {
          return resolve({
            error: null,
            success: result
          });
        }
        if (REFRESH_TOKEN_CODE.includes(code)) {
          handleExpireToken();
        }
        /** 仅有使用服务端错误信息的请求才 toast 提示错误 */
        if (axiosConfig.useErrMsg) {
          showErrorMsg(message);
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
