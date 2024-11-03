<template>
  <section class="bg-FF8812 m-3 rounded-20 px-7.5 py-5 grid grid-cols-2 gap-4">
    <div>
      <router-link to="/tasks/score/list" class="flex">
        <span class="text-white text-xs mr-2.5">积分余额</span>
        <img src="../../assets/imgs/arrow-right.png" class="w-3.5 h-3.5" />
      </router-link>
      <h1 class="text-white text-3xl font-bold mt-1">19530</h1>
      <a href="/tasks/exchange" class="bg-white text-sm rounded-30 block w-15 text-center py-1 my-2">兑换</a>
      <p class="text-white text-xs">有效期365天内兑换</p>
    </div>
    <div>
      <router-link to="/tasks/cash/list" class="flex">
        <span class="text-white text-xs mr-2.5">现金余额</span>
        <img src="../../assets/imgs/arrow-right.png" class="w-3.5 h-3.5" />
      </router-link>
      <h1 class="text-white text-3xl font-bold mt-1">6756.50</h1>
      <router-link to="/tasks/withdraw"
        class="bg-white text-sm rounded-30 block w-15 text-center py-1 my-2">提现</router-link>
    </div>
  </section>
  <section class="mx-5 mt-5 py-4">
    <h1 class="text-1A1A1A text-3xl font-medium mb-4">日常任务</h1>
    <div class="flex items-center mb-5">
      <img src="../../assets/imgs/score.png" class="w-7.5 h-7.5" />
      <div class="flex-1 mx-5">
        <h2 class="text-xl text-1A1A1A font-medium">签到领积分</h2>
        <p class="text-xs text-999999">日常签到零积分</p>
      </div>
      <span class="bg-FF3333 w-20 h-7.5 leading-7.5 text-center text-white rounded-full">+20</span>
    </div>
    <div class="flex items-center mb-5">
      <img src="../../assets/imgs/cash.png" class="w-7.5 h-7.5" />
      <div class="flex-1 mx-5">
        <h2 class="text-xl text-1A1A1A font-medium">看视频领现金</h2>
        <p class="text-xs text-999999">观看广告30秒领现金</p>
      </div>
      <span class="bg-FF8812 w-20 h-7.5 leading-7.5 text-center text-white rounded-full">+50</span>
    </div>
  </section>
</template>