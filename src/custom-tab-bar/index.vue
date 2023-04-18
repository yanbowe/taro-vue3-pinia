<template>
  <nut-config-provider :theme="theme" :theme-vars="themeVars">
    <nut-tabbar :model-value="activeTab" bottom safe-area-inset-bottom @tab-switch="tabSwitch">
      <nut-tabbar-item v-for="item in tabBar.list" :key="item.pagePath" :name="item.pagePath" :tab-title="item.text">
        <template #icon>
          <div class="text-25px" :class="item.icon" />
        </template>
      </nut-tabbar-item>
    </nut-tabbar>
  </nut-config-provider>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { switchTab } from '@tarojs/taro';
import { useAppStore, useThemeStore } from '@/store';

const tabBar = {
  custom: true,
  color: '#000000',
  selectedColor: '#FF0000',
  list: [
    {
      pagePath: '/pages/index/index',
      text: '首页',
      icon: 'i-local-wind'
    },
    {
      pagePath: '/pages/my/index',
      text: '个人中心',
      icon: 'i-local-custom-icon'
    }
  ]
};

const themeStore = useThemeStore();
const theme = computed(() => themeStore.theme);
const themeVars = computed(() => themeStore.themeVars);

const appStore = useAppStore();
const activeTab = computed(() => appStore.getActiveTab);
function tabSwitch(item: any, url: string) {
  appStore.setActiveTab(url);
  switchTab({ url });
}
</script>
<script lang="ts">
export default {
  options: {
    addGlobalClass: true
  }
};
</script>

<style lang="scss"></style>
