import { get } from '@/utils';

/** 示例 */
export const fetchDemo = async (data: any): Promise<any> => {
  return await get('/route/to/demo', data, { useErrMsg: true });
};
