import { switchTab, reLaunch } from '@tarojs/taro';

export function useRouterPush() {
  /** 跳转首页 */
  function toHome() {
    switchTab({
      url: '/pages/index/index'
    });
  }

  /** 跳转登录页 */
  function toLogin() {
    reLaunch({
      url: '/pages/login/index'
    });
  }

  return { toHome, toLogin };
}
