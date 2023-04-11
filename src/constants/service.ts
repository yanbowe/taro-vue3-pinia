/** 常用的contentTyp类型 */
export const CONTENT_TYPE = {
  // json
  json: 'application/json;charset=UTF-8',
  // text
  text: 'text/plain;charset=UTF-8',
  // form-data 一般配合qs
  formUrlencoded: 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  上传
  formData: 'multipart/form-data;charset=UTF-8'
};

/** 请求超时时间 */
export const REQUEST_TIMEOUT = 60 * 1000;

/** 请求成功状态码 */
export const SUCCESS_CODE = 200;

/** 错误信息的显示时间 */
export const ERROR_MSG_DURATION = 3 * 1000;

/** token失效需要刷新token的code */
export const REFRESH_TOKEN_CODE: (string | number)[] = [1012];
