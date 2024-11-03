<template>
  <section class="bg-F7F7F7 h-screen">
    <div class="pt-7.5 px-7.5 pb-4 bg-white">
      <p class="text-xl font-medium text-1A1A1A mb-4">提现金额</p>
      <div class="flex items-baseline border-E6E6E6 border-b" @click="onFocus">
        <span class="text-sm mr-4">¥</span>
        <div class="money">{{ money }}</div>
        <b class="cursor" v-if="show"></b>
      </div>
      <p class="text-sm mt-2 text-999999">可提现金额200</p>
    </div>
    <div class="bg-white mt-5 flex items-center py-4 px-7.5">
      <span class="flex-1 text-sm text-1A1A1A">提现至</span>
      <img src="../../assets/imgs/avatar.png" class="w-4 h-4" />
      <span class="text-xs text-1A1A1A mx-2.5">建设银行</span>
      <van-icon name="arrow" color="#999999" />
    </div>
    <div class="px-7.5 mt-8">
      <h2 class="text-1A1A1A text-xl font-medium">提现规则</h2>
      <p class="text-666666 mb-36">每周可提现一次</p>
      <van-button type="primary" block>提现</van-button>
    </div>
  </section>
  <van-number-keyboard :show="show" theme="custom" extra-key="." close-button-text="完成" @blur="show = false"
    @input="onInput" @delete="onDelete" />
  <van-action-sheet v-model:show="formData.visible" title="银行卡列表">
    <bank-card-list :card-id="selectCard?.cardId" @on-select="onSelectCard" @on-unbind="onUnbindCard"
      @on-error="onBankCardListError" />
  </van-action-sheet>
  <van-action-sheet v-model:show="formData.smsVisible" title="发送验证码">
    <sms-verification-code :phone="selectCard!.telephone" :submit="captchaSubmit" :get-captcha="getCaptcha"
      :key="Date.now()" auto-start />
  </van-action-sheet>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, shallowRef } from 'vue';
import BankCardList from '../../components/BankCardList.vue';
import SmsVerificationCode from '../../components/SmsVerificationCode.vue';
import request from '../../assets/request';
import { showFailToast } from 'vant';
import { useRouter } from 'vue-router';

const emit = defineEmits<{
  change: [value: string];
  focus: [];
}>();
const formData = reactive<{
  visible: boolean;
  smsVisible: boolean;
}>({
  visible: false,
  smsVisible: false,
});
const router = useRouter();
const selectCard = shallowRef<BankCardListData>();
const money = ref<string>('');
const show = ref(false);
const onInput = (value: number) => {
  money.value = `${money.value || ''}${value}`.replace(/^(\d+)\.(\d\d).*$/, '$1.$2');
  emit('change', money.value);
};
const onDelete = () => {
  money.value = money.value?.slice(0, -1);
  emit('change', money.value);
};
const onFocus = () => {
  show.value = true;
  emit('focus');
};
const onSelectCard = (card: BankCardListData) => {
  selectCard.value = card;
  formData.visible = false;
}
const onUnbindCard = (card: BankCardListData) => {
  if (selectCard.value?.cardId === card.cardId) {
    selectCard.value = undefined;
  }
}
const onBankCardListError = () => {
  formData.visible = false;
}
async function getCaptcha() {
  const res = await request.post<any, ResData<any>>('/pri/V2/Pay/sdkApi/cardPayCaptcha', {
    cardId: selectCard.value?.cardId,
  }, { headers: { skipError: true } });
  if (res.code !== '0000') {
    showFailToast(res.msg);
    return false;
  }
  return true;
}
async function captchaSubmit(captcha: string) {
  const res = await request.post<any, ResData<any>>('/pri/V2/Pay/sdkApi/cardPayConfirm', {
    captcha,
  });
  if (res.code !== '0000') {
    showFailToast(res.msg);
    return false;
  }
  formData.smsVisible = false;
  router.push('/tasks/withdraw/under-review');
  return true;
}
defineExpose({
  clear() {
    money.value = '';
    emit('change', money.value);
  },
});
onMounted(() => {
  onFocus();
});
</script>

<style lang="scss" scoped>
.money {
  font-size: 34px;
  height: 45px;
  line-height: 45px;
}

.cursor {
  width: 1px;
  height: 25px;
  background-color: #000;
  margin-left: 2px;
  animation: cursor-blink 1s infinite;
}

@keyframes cursor-blink {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>