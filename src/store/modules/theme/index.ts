import { defineStore } from 'pinia';

type ConfigProviderTheme = 'light' | 'dark';
interface AuthState {
  theme: ConfigProviderTheme;
  themeVars: object;
}

export const useThemeStore = defineStore('theme-store', {
  state: (): AuthState => ({
    theme: 'light',
    themeVars: {
      primaryColor: '#e53935',
      primaryColorEnd: '#e53935',
      navbarPadding: '0 0',
      navbarTitleFontColor: '#000',
      navbarTitleFont: '18px',
      navbarTitleFontWeight: '500'
    }
  }),
  getters: {
    getTheme: state => state.theme,
    getThemeVars: state => state.themeVars
  },
  actions: {
    /** 设置系统主题 */
    setTheme(theme: ConfigProviderTheme) {
      this.theme = theme;
    },
    /** 设置系统主题颜色 */
    setThemeVars(vars: object) {
      Object.assign(this.themeVars, vars);
    }
  }
});
