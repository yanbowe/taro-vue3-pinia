<template>
  <div>
    <nut-cell title="基础弹框" @click="baseClick"></nut-cell>
    <nut-cell title="分包A" @click="handleToA"></nut-cell>
    <nut-cell title="分包B" @click="handleToB"></nut-cell>
    <nut-cell title="TSX写法" @click="handleToC"></nut-cell>
    <nut-cell title="Icon" @click="handleToIcon"></nut-cell>
    <nut-dialog v-model:visible="visible1" title="基础弹框" content="这是基础弹框。" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { navigateTo } from '@tarojs/taro';

const visible1 = ref<boolean>(false);

function baseClick() {
  visible1.value = true;
}

function handleToA() {
  navigateTo({
    url: '/package/packageA/index'
  });
}

function handleToB() {
  navigateTo({
    url: '/package/packageB/index'
  });
}

function handleToC() {
  navigateTo({
    url: '/package/packageC/index'
  });
}

function handleToIcon() {
  navigateTo({
    url: '/package/icon/index'
  });
}

/** 设置页面属性 */
definePageConfig({
  navigationBarTitleText: '首页'
});
</script>
