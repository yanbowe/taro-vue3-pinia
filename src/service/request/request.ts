import axios from './instansce';

/** 创建请求 */
export function createRequest() {
  async function asyncRequest<T>(param: Service.RequestParam): Promise<Service.RequestResult<T>> {
    const { url } = param;
    const method = param.method || 'GET';

    return (await axios<T>({
      method,
      url,
      data: param.data,
      axiosConfig: param.axiosConfig
    })) as Service.RequestResult<T>;
  }
  /**
   * get请求
   * @param url - 请求地址
   * @param config - axios配置
   */
  function get<T>(url: string, data?: any, config?: Service.AxiosConfig) {
    return asyncRequest<T>({ url, method: 'GET', data, axiosConfig: config });
  }

  /**
   * post请求
   * @param url - 请求地址
   * @param data - 请求的body的data
   * @param config - axios配置
   */
  function post<T>(url: string, data?: any, config?: Service.AxiosConfig) {
    return asyncRequest<T>({ url, method: 'POST', data, axiosConfig: config });
  }
  /**
   * put请求
   * @param url - 请求地址
   * @param data - 请求的body的data
   * @param config - axios配置
   */
  function put<T>(url: string, data?: any, config?: Service.AxiosConfig) {
    return asyncRequest<T>({ url, method: 'PUT', data, axiosConfig: config });
  }

  /**
   * delete请求
   * @param url - 请求地址
   * @param config - axios配置
   */
  function handleDelete<T>(url: string, data?: any, config?: Service.AxiosConfig) {
    return asyncRequest<T>({ url, method: 'DELETE', data, axiosConfig: config });
  }

  return {
    get,
    post,
    put,
    delete: handleDelete
  };
}
