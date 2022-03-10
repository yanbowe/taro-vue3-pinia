<template>
  <nut-cell title="基础弹框" @tap="baseClick"></nut-cell>
  <nut-dialog v-model:visible="visible1" title="基础弹框" content="这是基础弹框。" @cancel="onCancel" @ok="onOk" />
  <div class="w-full flex-x-between">
    <span class="text-primary text-16px" @click="handleToA">featureA</span>
    <span span class="text-20px" @click="handleToB">featureB</span>
  </div>
  <div>是否登录：{{ isLogin }}</div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { navigateTo } from '@tarojs/taro';
import { useAuthStore } from '@/store';

const visible1 = ref<boolean>(false);
const authStore = useAuthStore();
const isLogin = computed(() => authStore.isLogin);
function baseClick() {
  visible1.value = true;
}

function onCancel() {}

function onOk() {}

function handleToA() {
  navigateTo({
    url: '/package/featureA/index'
  });
}

function handleToB() {
  navigateTo({
    url: '/package/featureB/index'
  });
}

/** 设置页面属性 */
definePageConfig({
  navigationBarTitleText: '首页'
});
</script>
