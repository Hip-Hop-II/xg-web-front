<template>
  <button type="button" class="text-1764FF disabled:text-969799" :disabled="disabled" :class="$props.className"
    @click="onSubmit">{{
      btnState.text
    }}</button>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue';

const props = defineProps<{
  className?: string;
  submit: () => Promise<boolean>;
}>();
const initial = {
  text: '重新发送',
  seconds: 60
};
let timer: any;
const disabled = defineModel<boolean>('disabled', { default: false });
const btnState = ref({ ...initial, text: '发送验证码' });

const stop = () => {
  clearInterval(timer);
  disabled.value = false;
  btnState.value = { ...initial };
}
const start = () => {
  disabled.value = true;
  const fn = () => {
    if (btnState.value.seconds < 1) {
      stop();
    } else {
      btnState.value.text = `${btnState.value.seconds}s`;
    }
    btnState.value.seconds -= 1;
  }
  fn();
  timer = setInterval(fn, 1000);
}
const onSubmit = async () => {
  const res = await props.submit();
  if (res) {
    start();
  }
}
onBeforeUnmount(stop);
</script>