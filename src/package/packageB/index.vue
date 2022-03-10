<template>
  <NumberSubmit />
  <div class="ellipsis-test ellipsis">测试超行省略</div>
</template>
<script lang="ts" setup>
import { vibrateShort, stopPullDownRefresh, useDidShow, usePullDownRefresh } from '@tarojs/taro';
import { NumberSubmit } from '@/components';

useDidShow(() => {});
usePullDownRefresh(() => {
  vibrateShort();
  stopPullDownRefresh();
});

definePageConfig({
  navigationBarTitleText: 'featureA',
  enablePullDownRefresh: true,
  backgroundTextStyle: 'dark'
});
</script>

<style lang="scss">
.ellipsis-test {
  width: 50px;
}
</style>
