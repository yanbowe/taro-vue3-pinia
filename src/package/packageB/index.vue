<template>
  <div class="ellipsis-test ellipsis">我是packageB</div>
</template>
<script lang="ts" setup>
definePageConfig({
  navigationBarTitleText: 'packageA',
  enablePullDownRefresh: true,
  backgroundTextStyle: 'dark'
});
</script>

<style lang="scss">
.ellipsis-test {
  width: 50px;
}
</style>
