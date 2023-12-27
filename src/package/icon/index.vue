<script setup lang="ts">
definePageConfig({
  navigationBarTitleText: 'Icon'
});
</script>
<template>
  <basic-layout>
    <custom-navbar title="Icon" left-show />
    <div class="pb-12px text-16px">通过class渲染(https://icones.js.org/)</div>
    <div class="mr-15px text-30px i-ph-anchor-simple-thin" />
    <div class="mr-15px text-30px i-mdi-alarm text-orange-400" />
    <div class="mr-15px text-30px i-logos-vue" />
    <div class="mr-15px text-30px i-carbon-sun" />
    <div class="mr-15px text-30px i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
    <div class="pb-12px text-16px mt-10px">
      在src/assets/svg文件夹下的svg文件，通过在template里面以 icon-local-{文件名} 直接渲染
    </div>
    <div class="i-local-wind text-40px text-primary" />
    <div class="i-local-custom-icon text-40px text-primary" />
  </basic-layout>
</template>

<style lang="scss"></style>
