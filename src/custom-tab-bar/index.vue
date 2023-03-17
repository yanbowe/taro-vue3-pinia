<template>
  <nut-config-provider :theme="theme" :theme-vars="themeVars">
    <nut-tabbar :model-value="activeTab" bottom safe-area-inset-bottom @tab-switch="tabSwitch">
      <nut-tabbar-item
        v-for="(item, index) in tabBar.list"
        :key="item.pagePath"
        :name="`/${item.pagePath}`"
        :tab-title="item.text"
      >
        <template #icon>
          <div class="text-25px" :class="icon[index]" />
        </template>
      </nut-tabbar-item>
    </nut-tabbar>
  </nut-config-provider>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { switchTab } from '@tarojs/taro';
import { useAppStore, useThemeStore } from '@/store';
import { tabBar } from '@/tar-bar';

const themeStore = useThemeStore();
const theme = computed(() => themeStore.theme);
const themeVars = computed(() => themeStore.themeVars);

const appStore = useAppStore();
const activeTab = computed(() => appStore.getActiveTab);
function tabSwitch(item: any, url: string) {
  appStore.setActiveTab(url);
  switchTab({ url });
}

const icon = ['i-local-wind', 'i-local-custom-icon'];
</script>
<script lang="ts">
export default {
  options: {
    addGlobalClass: true
  }
};
</script>

<style lang="scss"></style>
