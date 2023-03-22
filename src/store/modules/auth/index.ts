import { defineStore } from 'pinia';
import { getUserInfo, getToken, clearAuthStorage } from './helpers';

interface AuthState {
  /** 用户信息 */
  userInfo: Auth.UserInfo;
  /** 用户token */
  token: string;
}

export const useAuthStore = defineStore('auth-store', {
  state: (): AuthState => ({
    userInfo: getUserInfo(),
    token: getToken()
  }),
  getters: {
    /** 是否登录 */
    isLogin: state => Boolean(state.token)
  },
  actions: {
    /** 重置auth状态 */
    resetAuthStore() {
      clearAuthStorage();
      this.$reset();
    }
  }
});
