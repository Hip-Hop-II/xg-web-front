<template>
  <section class="p-5">
    <div class="flex text-sm items-center mb-5">
      <label for="userName" class="mr-8 text-666666 w-12">姓名</label>
      <input type="text" id="userName" placeholder="请输入姓名" class="flex-1 bg-F7F7F7 rounded-md p-2.5" />
    </div>
    <div class="flex text-sm items-center">
      <label for="phone" class="mr-8 text-666666 w-12">手机号</label>
      <input type="number" id="phone" placeholder="请输入手机号" class="flex-1 bg-F7F7F7 rounded-md p-2.5" />
    </div>
    <van-button type="primary" block class="mt-10">添加</van-button>
  </section>
</template>