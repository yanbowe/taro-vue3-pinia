export type Method = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';

export interface Config {
  contentType?: string;
  /** 是否显示Toast */
  useErrMsg?: boolean;
}
