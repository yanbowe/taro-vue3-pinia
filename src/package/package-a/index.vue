<template>
  <basic-layout>
    <custom-navbar title="我是packageA" left-show />
    <div class="w-100px text-20px text-primary ellipsis-text">我是packageA</div>
  </basic-layout>
</template>
<script setup lang="ts">
definePageConfig({
  navigationBarTitleText: 'packageA'
});
</script>

<style lang="scss"></style>
