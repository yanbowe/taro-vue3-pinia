<template>
  <div class="w-full bg-#fff" :style="{ height: pxTransform(height) }"></div>
  <div :style="{ height: pxTransform(navBarHeight), top: pxTransform(statusBarHeight) }" class="w-full fixed z-99">
    <nut-navbar v-bind="$attrs" class="custom-nav-bar" @on-click-back="navigateBack()">
      <template #left-show>
        <div class="i-ph-caret-left-bold text-22px text-#000"></div>
      </template>
      <template v-for="item in Object.keys($slots)" #[item]="data" :key="item">
        <slot :name="item" v-bind="data || {}"></slot>
      </template>
    </nut-navbar>
  </div>
</template>

<script setup lang="ts">
import { getEnv, navigateBack, getWindowInfo, pxTransform } from '@tarojs/taro';

const env = getEnv();
const windowInfo = env === 'WEB' ? { statusBarHeight: 0 } : getWindowInfo();

const statusBarHeight = windowInfo.statusBarHeight || 0;

const navBarHeight = 44;
/** 安全区高度 + navbar高度 */
const height = statusBarHeight + navBarHeight;
</script>
<style lang="scss"></style>
