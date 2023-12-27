<script setup lang="ts">
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
<template>
  <basic-layout>
    <custom-navbar title="我是packageB" left-show />
    <div>我是packageB</div>
  </basic-layout>
</template>

<style lang="scss"></style>
