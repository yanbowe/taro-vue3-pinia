import { ContentTypeEnum } from '@/enum';
import { post } from '../request';

/** 示例 */
export async function fetchDemo<T>(data: any) {
  return await post<T>('/route/to/demo', data, {
    useErrMsg: true,
    contentType: ContentTypeEnum.FORM_URLENCODED
  });
}
