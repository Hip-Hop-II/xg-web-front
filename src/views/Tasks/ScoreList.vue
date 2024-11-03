<template>
  <h1 class="text-0F0F0F text-3xl py-5 px-6">积分余额</h1>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" class="task-lists">
      <div v-for="(item, index) in list" :key="index"
        class="px-7.5 py-2 border-b border-E6E6E6 flex items-center justify-between task-list">
        <div>
          <h3 class="text-lg text-1A1A1A">{{ item.title }}</h3>
          <p class="text-xs text-999999 mt-1">{{ item.date }}</p>
        </div>
        <span class="text-lg text-1A1A1A">{{ item.score }}</span>
      </div>
    </van-list>
  </van-pull-refresh>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const list = ref<any[]>([]);
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);

const onLoad = () => {
  setTimeout(() => {
    if (refreshing.value) {
      list.value = [];
      refreshing.value = false;
    }

    for (let i = 0; i < 20; i++) {
      list.value.push({
        title: '签到',
        date: '2024-06-06 15:00:00',
        score: '+20'
      });
    }
    loading.value = false;

    if (list.value.length >= 40) {
      finished.value = true;
    }
  }, 1000);
};

const onRefresh = () => {
  // 清空列表数据
  finished.value = false;

  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true;
  onLoad();
};
</script>

<style lang="scss" scoped>
.task-lists {
  .task-list:first-child {
    border-top: none;
  }
}
</style>