import { defineStore } from 'pinia';
import { subscribeTheme } from './helpers';

type ColorType = 'green' | 'red' | 'orange';

interface OtherColor {
  /** 信息 */
  green: string;
  /** 警告 */
  orange: string;
  /** 错误 */
  red: string;
}

interface ThemeStore {
  /** 主题颜色 */
  themeColor: string;
  /** 其他颜色 */
  otherColor: OtherColor;
}

export const useThemeStore = defineStore('theme-store', {
  state: (): ThemeStore => ({
    themeColor: '#1890fa',
    otherColor: {
      green: '#07c160',
      orange: '#ff976a',
      red: '#ee0a24'
    }
  }),
  actions: {
    /** 设置系统主题颜色 */
    setThemeColor(color: string) {
      this.themeColor = color;
      subscribeTheme();
    },
    /** 设置系统其他颜色 */
    setOtherColor(color: string, type: ColorType = 'green') {
      this.otherColor[type] = color;
      subscribeTheme();
    }
  }
});

export { subscribeTheme };
