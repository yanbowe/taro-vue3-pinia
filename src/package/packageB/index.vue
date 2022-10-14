<template>
  <div>我是packageB</div>
</template>
<script lang="ts" setup>
import { fetchDemo } from '@/service';

definePageConfig({
  navigationBarTitleText: 'packageB',
  enablePullDownRefresh: true,
  backgroundTextStyle: 'dark'
});

async function getDemo() {
  const res = await fetchDemo({ phone: 1 });
  window.console.log(res);
}
getDemo();
</script>

<style lang="scss">
.ellipsis-test {
  width: 50px;
}
</style>
