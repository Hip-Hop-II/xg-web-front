<template>
  <section class="flex flex-col h-screen py-5">
    <ul class="flex-1 overflow-y-auto px-5">
      <li class="flex items-center mb-2.5">
        <img src="../../assets/imgs/avatar.png" class="w-15 h-15" />
        <div class="flex-1 mx-5">
          <h1 class="text-1A1A1A text-xl">张三</h1>
          <p class="text-666666 text-sm">13888888888</p>
        </div>
        <button class="text-999999 font-medium" @click="onDelete">删除</button>
      </li>
    </ul>
    <router-link to="/device/add-contact"
      class="text-1764FF text-xl py-2.5 bg-EBF1FF w-50 rounded-md text-center m-auto">添加联系人</router-link>
  </section>
</template>

<script setup lang="ts">
import { showConfirmDialog } from 'vant';

const onDelete = () => {
  showConfirmDialog({
    message: '确定要删除该联系人吗？',
  })
    .then(() => {
      // on confirm
    })
    .catch(() => {
    });
}
</script>