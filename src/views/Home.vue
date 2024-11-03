<template>
  <section class="bg-F5F8FF min-h-screen p-2.5">
    <section class="bg-white py-2.5 px-5 mb-3 rounded-md">
      <div class="flex items-center mb-3">
        <router-link to="/mine">
          <img src="../assets/imgs/avatar.png" class="w-16" />
        </router-link>
        <div class="mx-4">
          <router-link to="/mine" class="text-1A1A1A block mb-1">14891452179</router-link>
          <van-space>
            <a href="" class="bg-FF8812 text-xs text-white px-3 py-1 rounded-full">实名认证</a>
            <button class="bg-1764FF text-xs text-white px-3 py-1 rounded-full">诊断</button>
          </van-space>
        </div>
        <router-link to="/mine" class="flex-1 text-right py-4">
          <van-icon name="arrow" color="#999999" />
        </router-link>
      </div>
      <p class="text-666666 text-xs">ICCID:898608090322D045121</p>
      <p class="text-666666 text-xs">安全防骚扰|接听免费|免漫游费|禁止手机使用</p>
    </section>
    <section class="bg-white px-5 py-2.5 mb-3 rounded-md">
      <div class="flex items-center justify-between mb-3">
        <div class="text-1764FF text-xs">
          <router-link to="/device/contacts">未实名</router-link>
          <span class="mx-1">|</span>
          <router-link to="/device/contacts">已激活</router-link>
          <span class="mx-1">|</span>
          <router-link to="/device/contacts">通讯录</router-link>
        </div>
        <button class="bg-1764FF text-xs text-white px-3 py-1 rounded-full">刷新</button>
      </div>
      <div class="flex items-center justify-between">
        <div>
          <p>2024-08-20</p>
          <p class="text-999999 text-xs mt-1">套餐到期时间</p>
        </div>
        <div class="text-center">
          <p>300</p>
          <p class="text-999999 text-xs mt-1">剩余语音(分钟)</p>
        </div>
        <div class="text-right">
          <p>100.00</p>
          <p class="text-999999 text-xs mt-1">剩余流量(M)</p>
        </div>
      </div>
    </section>
    <section class="bg-white p-2.5 mb-3 grid grid-cols-2 gap-4 rounded-md">
      <a href="/home" class="flex items-center justify-around rounded-md bg-E4EDF5 h-16">
        <img src="../assets/imgs/charge-entry.png" class="w-6" />
        <span class="text-1A1A1A">充值查询</span>
      </a>
      <router-link to="/card-active-step" class="flex items-center justify-around rounded-md bg-EEE4F5 h-16">
        <img src="../assets/imgs/card-active-entry.png" class="w-6" />
        <span class="text-1A1A1A">开卡步骤</span>
      </router-link>
      <div @click="toTask" class="flex items-center justify-around rounded-md bg-F5E5DF h-16">
        <img src="../assets/imgs/tasks-entry.png" class="w-6" />
        <span class="text-1A1A1A">赚钱任务</span>
      </div>
      <a href="/home" class="flex items-center justify-around rounded-md bg-E3F2D8 h-16">
        <img src="../assets/imgs/shop-entry.png" class="w-6" />
        <span class="text-1A1A1A">商品中心</span>
      </a>
    </section>
    <section class="bg-white p-2.5 mb-6 rounded-md">
      <router-link to="/add-customer-service" class="flex items-center">
        <span class="flex-1">添加在线客服</span>
        <img src="../assets/imgs/service-qrcode.png" width="30" class="mr-5" />
        <van-icon name="arrow" color="#999999" />
      </router-link>
    </section>
    <div class="text-center font-medium text-xl">
      <a href="tel:400-900-683" class="underline">7x24客服电话 400-900-683</a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const toTask = () => {
  router.push('/tasks');
}
</script>