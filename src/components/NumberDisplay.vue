<template>
  <div class="test">
    <p class="title" @click="handleChangeName">{{ name }}</p>
  </div>
</template>

<script lang="ts" setup>
import useUserContext from '@/package/featureA/context/user';

const { useUserInject } = useUserContext();
const { name, handleChangeName } = useUserInject();
</script>

<style>
.title {
  font-size: 40px;
}
</style>
