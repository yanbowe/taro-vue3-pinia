<template>
  <nut-config-provider :theme="theme" :theme-vars="themeVars">
    <slot />
  </nut-config-provider>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useThemeStore } from '@/store';

const themeStore = useThemeStore();
const theme = computed(() => themeStore.theme);
const themeVars = computed(() => themeStore.themeVars);
</script>
<style scoped></style>
