import { request } from '../request';

interface Demo {
  name: string;
}

/** 示例 */
export function fetchDemo(data: any) {
  return request.post<Demo>('/route/to/demo', data, {
    useErrMsg: true
  });
}
