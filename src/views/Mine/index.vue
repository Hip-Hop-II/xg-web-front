<template>
  <section class="p-2.5 bg-F5F8FF h-screen">
    <section class="p-5 bg-white rounded-md">
      <div class="flex items-center">
        <span class="text-lg text-333333">手机号</span>
        <span class="flex-1 mr-5 text-1A1A1A font-medium text-lg text-right">12345678900</span>
        <van-icon name="arrow" color="#999999" />
      </div>
      <a href="/mine" class="flex items-center my-5">
        <span class="text-lg text-333333">实名认证</span>
        <span class="flex-1 mr-5 text-1A1A1A font-medium text-lg text-right">已认证</span>
        <van-icon name="arrow" color="#999999" />
      </a>
      <a href="/mine" class="flex items-center">
        <span class="text-lg text-333333">订单中心</span>
        <span class="flex-1"></span>
        <van-icon name="arrow" color="#999999" />
      </a>
    </section>
    <section class="mt-10">
      <h1 class="text-1A1A1A font-medium text-3xl mb-6">智能设备</h1>
      <div class="flex items-center mb-2.5 text-1764FF bg-white p-2.5 rounded-md">
        <div class="py-3 bg-1764FF rounded-md w-12.5 text-center">
          <img src="../../assets/imgs/watch-active.png" class="h-6.5 inline-block" />
        </div>
        <div class="flex-1 mx-2.5">
          <p class="text-lg">智能手表</p>
          <p class="text-sm">设备号：145789789231</p>
        </div>
        <router-link to="/device/info" class="text-sm py-3 pr-2.5">查看</router-link>
      </div>
      <div class="flex items-center mb-2.5 text-999999 bg-white p-2.5 rounded-md">
        <div class="py-3 bg-F7F7F7 rounded-md w-12.5 text-center">
          <img src="../../assets/imgs/camera-inactive.png" class="h-6.5 inline-block" />
        </div>
        <div class="flex-1 mx-2.5 text-lg">
          <p class="text-lg">智能摄像头</p>
          <p class="text-sm">设备号：145789789231</p>
        </div>
        <button class="text-sm py-3 pr-2.5" @click="onSwitch('')">切换</button>
      </div>
      <router-link to="/device/bind"
        class="block rounded-md mt-16 bg-white w-40 h-10 text-center m-auto text-1764FF leading-10">添加新设备</router-link>
    </section>
  </section>
</template>

<script setup lang="ts">
const onSwitch = (id: string) => {
  console.log(id);
}
</script>