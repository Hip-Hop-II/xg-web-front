<template>
  <div class="px-4 py-9 text-center">
    <van-icon name="checked" color="#14D927" size="50" />
    <van-icon name="clock" color="#1764FF" size="50" />
    <van-icon name="clear" color="#FF3333" size="50" />
    <h3 class="text-xl mt-2 text-1A1A1A">下单成功</h3>
  </div>
  <div class="flex items-center bg-F5F8FF rounded-10 relative p-4 border-E6E6E6 mx-4">
    <img v-if="product.hot" class="absolute w-10 left-0 -top-2 rounded-full" src="../../assets/imgs/recmend.png" />
    <h2 class="flex-1 mr-5 font-medium text-base">{{ product.name }}</h2>
    <div class="text-center">
      <del class="block font-medium text-xs text-999999" v-if="product.originalPrice">¥{{ (product.originalPrice /
        100).toFixed(2) }}</del>
      <van-space :size="4" align="baseline">
        <span class="text-base font-medium text-FF4747">¥</span>
        <h1 class="font-bold text-2xl text-FF4747">{{ (product.price / 100).toFixed(2) }}</h1>
      </van-space>
    </div>
  </div>
  <div class="mx-9 mt-14">
    <h1 class="text-FF3333 text-center text-3xl font-medium">温馨提示</h1>
    <p class="text-xl mt-2">应工信部要求您的卡需要实名认证才能正常使用</p>
  </div>
  <a href=""
    class="text-xl text-1764FF mt-14 bg-EBF1FF w-50 h-12.5 block leading-12.5 text-center rounded-md m-auto">进行实名认证</a>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue';

const product = shallowRef({
  "code": "6",
  "name": "益生菌固体饮料菌群超10000亿特选16联菌",
  "price": 46000,
  "originalPrice": 46000,
  "hot": false
});
</script>