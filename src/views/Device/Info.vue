<template>
  <section class="p-5">
    <h1 class="text-1A1A1A font-medium text-3xl mb-6">设备信息</h1>
    <div class="flex items-center text-1A1A1A">
      <div class="py-3 bg-F7F7F7 rounded-md w-12.5 text-center">
        <img src="../../assets/imgs/camera-inactive.png" class="h-6.5 inline-block" />
      </div>
      <div class="flex-1 mx-5 text-lg">
        <p>智能摄像头</p>
        <p>设备号：145789789231</p>
      </div>
    </div>
    <button
      class="rounded-md bg-EBF1FF w-40 h-10 text-center text-1764FF leading-10 fixed bottom-20 left-1/2 -translate-x-1/2"
      @click="show = true">解绑</button>
  </section>
  <van-action-sheet v-model:show="show" title="提示" :close-on-click-overlay="false" close-icon="close">
    <div class="px-5 pb-8">
      <h1 class="text-xl font-medium mb-5">确定要解除以下绑定设备吗？</h1>
      <p class="text-lg text-1A1A1A">智能手表</p>
      <p class="text-lg text-1A1A1A">设备号：123456789</p>
      <div class="flex justify-between mt-20">
        <van-button type="default" class="bg-F5F5F5 border-F5F5F5 w-40" @click="show = false">取消</van-button>
        <van-button type="primary" class="w-40" @click="onUnbind">解绑</van-button>
      </div>
    </div>
  </van-action-sheet>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const show = ref(false);
const onUnbind = () => {
  show.value = false;
}
</script>