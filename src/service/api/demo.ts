import { request } from '../request';

/** 示例 */
export function fetchDemo<T>(data: any) {
  return request.post<T>('/route/to/demo', data, {
    useErrMsg: true
  });
}
