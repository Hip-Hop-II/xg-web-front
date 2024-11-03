<template>
  <img src="../../assets/imgs/device.png" alt="绑定设备" />
  <section class="p-5">
    <h2 class="text-xl font-medium mb-5">设备号</h2>
    <input type="text" placeholder="请输入设备号" v-model="deviceId"
      class="w-full rounded-md bg-F7F7F7 border border-F7F7F7 p-3" />
    <van-button type="primary" block class="mt-7" :disabled="!deviceId">下一步</van-button>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const deviceId = ref('');
</script>