/** 用户相关模块 */
declare namespace Auth {
  /** 用户信息 */
  interface UserInfo {
    /** 用户id */
    userId: string;
    /** 用户名 */
    userName: string;
    /** 用户手机号 */
    userPhone: string;
    /** 用户角色类型 */
    userRole: RoleType;
  }
}
