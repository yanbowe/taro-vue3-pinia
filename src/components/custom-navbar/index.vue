<script setup lang="ts">
import { getEnv, navigateBack, getWindowInfo, pxTransform } from '@tarojs/taro';

const env = getEnv();
const windowInfo = env === 'WEB' ? { statusBarHeight: 0 } : getWindowInfo();

const statusBarHeight = windowInfo.statusBarHeight || 0;

const navBarHeight = 44;
/** 安全区高度 + navbar高度 */
const height = statusBarHeight + navBarHeight;
</script>

<template>
  <!-- 占位div -->
  <div class="w-full" :style="{ height: pxTransform(height) }"></div>
  <div :style="{ paddingTop: pxTransform(statusBarHeight) }" class="w-full fixed-lt z-10 bg-#fff">
    <nut-navbar class="custom-navbar" v-bind="$attrs" @on-click-back="navigateBack()">
      <template #left-show>
        <div class="i-ph-caret-left-bold text-22px text-#000"></div>
      </template>
      <template v-for="item in Object.keys($slots)" #[item]="data" :key="item">
        <slot :name="item" v-bind="data || {}"></slot>
      </template>
    </nut-navbar>
  </div>
</template>
<style lang="scss">
.custom-navbar {
  .nut-navbar {
    margin-bottom: 0;
    box-shadow: 0px 1px 1px rgba(237, 238, 241, 1);
  }
}
</style>
