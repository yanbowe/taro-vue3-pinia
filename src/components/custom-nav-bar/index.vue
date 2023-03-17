<template>
  <div :style="{ height: `${height}px` }">
    <nut-navbar v-bind="$attrs" fixed safe-area-inset-top class="custom-nav-bar" @on-click-back="navigateBack()">
      <template v-for="item in Object.keys($slots)" #[item]="data" :key="item">
        <slot :name="item" v-bind="data || {}"></slot>
      </template>
    </nut-navbar>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { navigateBack, getWindowInfo } from '@tarojs/taro';

const { statusBarHeight = 0 } = getWindowInfo();
/** 安全区高度 + navbar高度 */
const height = computed(() => statusBarHeight + 44);
</script>
<style lang="scss">
.custom-nav-bar {
  .nut-navbar__left {
    padding: 0;
    .nut-icon-left {
      color: #000 !important;
    }
  }
  .nut-navbar__title {
    .title {
      font-size: 18px;
      color: #000;
      font-weight: 500;
    }
  }
}
.nut-theme-dark {
  .custom-nav-bar {
    .nut-icon-left {
      color: #fff !important;
    }
    .nut-navbar__title {
      .title {
        color: #fff;
      }
    }
  }
}
</style>
