<template>
  <div class="bank-card-bind p-4 h-70vh">
    <van-form @submit="onSubmit" input-align="right" error-message-align="right" label-width="7em">
      <van-field v-model="formData.name" name="name" label="姓名" placeholder="请填写姓名"
        :rules="[{ required: true, message: '请填写姓名' }]" />
      <van-field v-model="formData.idCardNum" name="idCardNum" label="身份证号" placeholder="请填写身份证号"
        :rules="[{ required: true, message: '请填写身份证号' }, { pattern: idCardReg, message: '身份证号输入有误' }]" />
      <van-field v-model="formData.bankCardNumber" name="bankCardNumber" label="银行卡号" placeholder="请填写银行卡号"
        :rules="[{ required: true, message: '请填写银行卡号' }, { pattern: debitCardRegex, message: '银行卡号输入有误' }]" />
      <van-field v-model="formData.phoneNumber" name="phoneNumber" label="银行预留手机号" placeholder="请填写银行预留手机号"
        :rules="[{ required: true, message: '请填写银行预留手机号' }, { pattern: phoneNumReg, message: '手机号输入有误' }]" />
      <div class="mt-10">
        <van-button round block type="primary" native-type="submit">
          下一步
        </van-button>
      </div>
    </van-form>
  </div>
  <van-action-sheet v-model:show="visible" title="发送验证码">
    <sms-verification-code :phone="formData.phoneNumber.replace(/^(\d{3})(\d{4})(\d{4})$/, '$1****$3')"
      :submit="captchaSubmit" :get-captcha="getCaptcha" :key="Date.now()" auto-start />
  </van-action-sheet>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { idCardReg, phoneNumReg, debitCardRegex } from '../assets/utils';
import request from '../assets/request';
import SmsVerificationCode from './SmsVerificationCode.vue';
import { showFailToast } from 'vant';

interface BankCardBindData {
  name: string;
  idCardNum: string;
  bankCardNumber: string;
  phoneNumber: string;
  cardId: string;
}
const emit = defineEmits<{
  onSuccess: [data?: any];
}>();
const visible = ref(false);
const formData = reactive<BankCardBindData>({
  name: '',
  idCardNum: '',
  bankCardNumber: '',
  phoneNumber: '',
  cardId: '',
});
const onSubmit = async (values: any) => {
  const res = await request.post<any, ResData<{ cardId: string; }>>('props.bankCardApis.bindCard', {
    ...values,
  });
  formData.cardId = res.retContent.cardId;
  visible.value = true;
};
const getCaptcha = async () => {
  const res = await request.post<any, ResData<any>>('props.bankCardApis.bindCardCaptcha', {
    cardId: formData.cardId
  }, { headers: { skipError: true } });
  if (res.code !== '0000') {
    showFailToast(res.msg);
    return false;
  }
  return true;
}
const captchaSubmit = async (captcha: string) => {
  const res = await request.post<any, ResData<any>>('props.bankCardApis.bindCardConfirm', {
    cardId: formData.cardId,
    captcha
  });
  if (res.code === '0000') {
    visible.value = false;
    emit('onSuccess');
    return true;
  }
  return false;
}
</script>

<style lang="scss" scoped>
.bank-card-bind {
  :deep(.van-cell) {
    padding: 20px 0;
    border-bottom: 1px solid #e6e6e6;
    font-size: var(--van-font-size-lg);

    &::after {
      display: none;
    }
  }

  :deep(.van-field__error-message--right) {
    position: absolute;
    right: 0;
    font-size: .875rem;
  }
}
</style>