<template>
  <nut-config-provider
    :theme="theme"
    :theme-vars="themeVars"
    class="overflow-x-hidden"
    :class="[
      hasTarBar ? 'layout-tabbar-screen layout-tabbar-safe-bottom' : 'layout-screen safe-area-bottom',
      theme === 'dark' ? 'bg-#000' : 'bg-#fff'
    ]"
  >
    <slot />
  </nut-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useThemeStore } from '@/store';

interface Props {
  /** 是否有tabbar */
  tarBar?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  tarBar: false
});
const hasTarBar = computed(() => props.tarBar);

const themeStore = useThemeStore();
const theme = computed(() => themeStore.theme);
const themeVars = computed(() => themeStore.themeVars);
</script>
<style scoped></style>
