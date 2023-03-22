<template>
  <nut-config-provider
    :theme="theme"
    :theme-vars="themeVars"
    class="overflow-x-hidden"
    :class="[...providerClass, theme === 'dark' ? 'bg-#000' : 'bg-#fff']"
  >
    <slot />
  </nut-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useThemeStore } from '@/store';

interface Props {
  /** 是否有tabbar */
  showTabBar?: boolean;
  /** 是否开启安全区（有tabbar默认开启安全区） */
  safeAreaInsetBottom?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  showTabBar: false,
  safeAreaInsetBottom: true
});
const showTabBar = computed(() => props.showTabBar);

const themeStore = useThemeStore();
const theme = computed(() => themeStore.theme);
const themeVars = computed(() => themeStore.themeVars);

const providerClass = computed(() => {
  const safeBottom = props.safeAreaInsetBottom ? 'layout-screen safe-area-bottom' : 'min-h-100vh';
  return [showTabBar.value ? 'layout-tabbar-screen layout-tabbar-safe-bottom' : safeBottom];
});
</script>
<style scoped></style>
