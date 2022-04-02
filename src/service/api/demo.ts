import { ContentTypeEnum } from '@/enum';
import { post } from '../request';

/** 示例 */
export async function fetchDemo(data: any) {
  return await post<{ hello: string }>('/route/to/demo', data, {
    useErrMsg: true,
    contentType: ContentTypeEnum.FORM_URLENCODED
  });
}
