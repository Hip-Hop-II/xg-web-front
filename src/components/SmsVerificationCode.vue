<template>
  <section class="px-10 pt-16 h-70vh">
    <h1 class="text-black text-3xl">请输入验证码</h1>
    <p class="text-sm text-666666 mt-2">已发送至{{ props.phone }}</p>
    <div class="mt-14 sms-code">
      <van-field v-model="captcha" type="digit" autocomplete="off" autocorrect="off" placeholder="验证码"
        class="border-b !px-0" :maxlength="6" autofocus />
    </div>
    <van-button type="default" size="mini" style="border: none;font-size: .875rem;color: #666;padding: 0;"
      :disabled="disabled" @click="getCaptcha">
      <van-space :size="0" :class="`${!disabled && 'text-primary'}`">
        重新发送<van-count-down v-show="disabled" :class="`${!disabled && 'text-primary'}`" ref="countDownRef"
          :auto-start="false" :time="60000" format="ss秒" @finish="onFinish" />
      </van-space>
    </van-button>
    <div class="mt-10">
      <van-button type="primary" block @click="submit" :disabled="!captcha">提交</van-button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps<{
  phone: string;
  autoStart?: boolean;
  getCaptcha: () => Promise<boolean>;
  submit: (captcha: string) => Promise<boolean>;
}>();
const captcha = ref<string>();
const disabled = ref(true);
const countDownRef = ref<any>(null);
const onFinish = () => {
  disabled.value = false;
  countDownRef.value?.reset();
}
const getCaptcha = async () => {
  disabled.value = true;
  const res = await props.getCaptcha();
  if (!res) {
    disabled.value = false;
  } else {
    countDownRef.value?.start();
  }
}
const submit = async () => {
  const res = await props.submit(captcha.value!);
  if (res) {
    disabled.value = false;
    countDownRef.value?.reset();
  }
}
onMounted(() => {
  if (props.autoStart) {
    countDownRef.value?.start();
  }
});
</script>

<style lang="scss" scoped>
.sms-code {
  :deep(.van-field__control) {
    font-size: 1.875rem;
    letter-spacing: 1.25rem;

    &::placeholder {
      font-size: 1rem;
      letter-spacing: normal;
    }
  }
}
</style>