import { defineStore } from 'pinia';
import { useRoutePath } from '@/composables';

interface AuthState {
  /** 用户信息 */
  activeTab: string;
}

export const useAppStore = defineStore('app-store', {
  state: (): AuthState => ({
    activeTab: useRoutePath()
  }),
  getters: {
    /** 是否登录 */
    getActiveTab: state => state.activeTab
  },
  actions: {
    setActiveTab(tab: string) {
      this.activeTab = tab;
    },
    /** 重置app状态 */
    resetAuthStore() {
      this.$reset();
    }
  }
});
