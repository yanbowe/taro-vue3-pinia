<script setup lang="ts">
import { ref } from 'vue';
import { navigateTo } from '@tarojs/taro';
import { useThemeStore } from '@/store';

const visible1 = ref<boolean>(false);

function baseClick() {
  visible1.value = true;
}

function handleToA() {
  navigateTo({
    url: '/package/package-a/index'
  });
}

function handleToB() {
  navigateTo({
    url: '/package/package-b/index'
  });
}

function handleToC() {
  navigateTo({
    url: '/package/package-c/index'
  });
}

function handleToIcon() {
  navigateTo({
    url: '/package/icon/index'
  });
}

const themeStore = useThemeStore();
function handleTheme() {
  const mode = themeStore.getTheme === 'light' ? 'dark' : 'light';
  themeStore.setTheme(mode);
}
function handleThemeColor() {
  const color = `#${Math.random().toString(16).substr(2, 6)}`;
  themeStore.setThemeVars({ primaryColor: color, primaryColorEnd: color });
}

/** 设置页面属性 */
definePageConfig({
  navigationBarTitleText: '首页'
});
</script>

<template>
  <basic-layout show-tab-bar>
    <custom-navbar title="首页" />
    <nut-cell title="基础弹框" @click="baseClick"></nut-cell>
    <nut-cell title="分包A" @click="handleToA"></nut-cell>
    <nut-cell title="分包B" @click="handleToB"></nut-cell>
    <nut-cell title="TSX写法" @click="handleToC"></nut-cell>
    <nut-cell title="Icon" @click="handleToIcon"></nut-cell>
    <nut-dialog v-model:visible="visible1" title="基础弹框" content="这是基础弹框。" />
    <nut-cell>
      <nut-button type="primary" size="mini" class="!mr-20px" @click="handleTheme">切换主题模式</nut-button>
      <nut-button type="primary" size="mini" @click="handleThemeColor">切换主题色</nut-button>
    </nut-cell>
  </basic-layout>
</template>
