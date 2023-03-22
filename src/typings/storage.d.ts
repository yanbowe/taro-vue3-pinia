declare namespace StorageInterface {
  /** localStorage的存储数据的类型 */
  interface Local {
    /** 用户token */
    token: string;
    /** 用户信息 */
    userInfo: Auth.UserInfo;
  }
}
