import { kebabCase } from 'lodash-es';
import { useThemeStore } from '@/store';

type ConfigProviderProps = Record<string, string | number> | undefined;
type ThemeVars = Exclude<ConfigProviderProps, undefined>;
type ThemeVarsKeys = keyof ThemeVars;

/** 添加css vars至html */
export function addThemeCssVarsToHtml(themeVars: ThemeVars) {
  const keys = Object.keys(themeVars) as ThemeVarsKeys[];
  const style: string[] = [];
  keys.forEach(key => {
    style.push(`--${kebabCase(key)}-color: ${themeVars[key]}`);
  });
  const styleStr = style.join(';');
  document.documentElement.style.cssText += styleStr;
}

export function subscribeTheme() {
  const themeStore = useThemeStore();

  addThemeCssVarsToHtml({ primary: themeStore.themeColor, ...themeStore.otherColor });
}
