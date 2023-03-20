<template>
  <div :style="{ height: height }">
    <nut-navbar v-bind="$attrs" fixed safe-area-inset-top class="custom-nav-bar" @on-click-back="navigateBack()">
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
import { computed } from 'vue';
import { getEnv, navigateBack, getWindowInfo, pxTransform } from '@tarojs/taro';

const env = getEnv();
const windowInfo = getWindowInfo();

const statusBarHeight = env === 'WEB' ? 0 : windowInfo.statusBarHeight || 0;
/** 安全区高度 + navbar高度 */
const height = computed(() => pxTransform(statusBarHeight + 44));
</script>
<style lang="scss"></style>
