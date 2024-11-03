<template>
  <img src="../assets/imgs/login.png" class="w-32 m-auto my-16" alt="登录" />
  <van-form @submit="onSubmit" class="p-5">
    <h2 class="text-xl font-medium mb-2">手机号</h2>
    <van-field type="tel" class="bg-F7F7F7 rounded-md after:hidden" placeholder="请输入手机号"
      :rules="[{ pattern: phoneNumReg, message: '请输入正确的手机号' }]" :maxlength="11" v-model="formData.phone" />
    <h2 class="text-xl font-medium mt-6 mb-2">验证码</h2>
    <van-field type="digit" class="bg-F7F7F7 rounded-md after:hidden" placeholder="请输入验证码"
      :rules="[{ pattern: /^\d{4,6}$/, message: '请输入正确的验证码' }]" :maxlength="6" v-model="formData.code">
      <template #button>
        <send-verify-code :submit="getVerifyCode" v-model:disabled="disabled" />
      </template>
    </van-field>
    <van-button type="primary" block class="mt-7" native-type="submit">登录</van-button>
  </van-form>
</template>

<script setup lang="ts">
import SendVerifyCode from '../components/SendVerifyCode.vue';
import { phoneNumReg } from '../assets/utils';
import { onBeforeUnmount, reactive, ref, watch } from 'vue';

const formData = reactive({
  phone: '',
  code: ''
});
const disabled = ref(true);
const unwatch = watch(() => formData.phone, (v: string) => {
  disabled.value = !phoneNumReg.test(v);
})
const getVerifyCode = async () => {
  return true;
}
const onSubmit = (values: any) => {
  console.log('submit', values);
}
onBeforeUnmount(unwatch);
</script>