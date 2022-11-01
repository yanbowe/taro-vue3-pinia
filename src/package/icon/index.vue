<template>
  <div class="p-15px">
    <div class="pb-12px text-16px">通过class渲染(https://icones.js.org/)</div>
    <div class="mr-15px text-30px i-ph-anchor-simple-thin" />
    <div class="mr-15px text-30px i-mdi-alarm text-orange-400" />
    <div class="mr-15px text-30px i-logos-vue" />
    <div class="mr-15px text-30px i-carbon-sun dark:i-carbon-moon" />
    <div class="mr-15px text-30px i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
    <div class="pb-12px text-16px mt-10px">
      在src/assets/svg文件夹下的svg文件，通过在template里面以 icon-custom-{文件名} 直接渲染
    </div>
    <div class="i-custom-wind text-40px text-primary" />
    <div class="i-custom-custom-icon text-40px text-primary" />
  </div>
</template>
<script lang="ts" setup>
definePageConfig({
  navigationBarTitleText: 'Icon'
});
</script>

<style lang="scss">
.ellipsis-test {
  width: 50px;
}
</style>
