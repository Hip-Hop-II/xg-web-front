<template>
  <img src="../../assets/imgs/device.png" alt="绑定设备" />
  <section class="p-5">
    <div class="bg-FF3333 rounded-full w-5.5 p-2.5 box-content m-auto">
      <img src="../../assets/imgs/light-white.png" width="22" alt="须知" />
    </div>
    <h2 class="text-FF3333 text-xl font-medium text-center mt-2.5">智能穿戴电话卡使用须知</h2>
    <ul class="mt-5.5">
      <li class="mb-4">
        <h4 class="font-medium text-1A1A1A">01-等待激活</h4>
        <p class="text-666666 text-sm ml-6">收到卡片后须扫码订购运营商消费套餐</p>
      </li>
      <li class="mb-4">
        <h4 class="font-medium text-1A1A1A">02-等待实名</h4>
        <p class="text-666666 text-sm ml-6">成功购买套餐后须完成实名认证</p>
      </li>
      <li class="mb-4">
        <h4 class="font-medium text-1A1A1A">03-可正常使用</h4>
        <p class="text-666666 text-sm ml-6">实名认证完成后须添加白名单手机号，完成上述3步后，方可正常使用!请务必按须知步骤操作!</p>
      </li>
      <li class="mb-4">
        <h4 class="font-medium text-1A1A1A">04-重要提示</h4>
        <p class="text-666666 text-sm ml-6">儿童电话卡不能拨打非白名单手机号，售后服务请咨询：<a href="tel:4009912128"
            class="text-FF3333 font-medium">4009912128</a></p>
      </li>
    </ul>
  </section>
  <section class="p-5">
    <h2 class="text-xl font-medium">设备号</h2>
    <input type="text" placeholder="请输入设备号" v-model="formData.deviceId"
      class="w-full rounded-md bg-F7F7F7 border border-F7F7F7 p-3" readonly />
    <h2 class="text-xl font-medium mt-2">ICCID</h2>
    <input type="text" placeholder="请输入ICCID" v-model="formData.iccid"
      class="w-full rounded-md bg-F7F7F7 border border-F7F7F7 p-3" readonly />
    <h2 class="text-xl font-medium mt-2">手机号</h2>
    <input type="text" placeholder="请输入手机号" v-model="formData.phone"
      class="w-full rounded-md bg-F7F7F7 border border-F7F7F7 p-3" readonly />
    <van-button type="primary" block class="mt-7" :disabled="!formData.deviceId">下一步</van-button>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const formData = reactive({
  deviceId: '',
  iccid: '',
  phone: ''
});
</script>