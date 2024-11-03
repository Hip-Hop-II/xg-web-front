<template>
  <section class="p-5 bg-F7F7F7 h-70vh">
    <van-empty image-size="100" description="您尚未绑定银行卡" v-if="!cards.length" />
    <van-radio-group v-model="checked" @change="onChange">
      <div class="mb-2.5 bg-white p-4 rounded-md items-center relative" v-for="item in cards" :key="item.cardId">
        <van-radio :name="item.cardId" label-position="left" class="van-radio-label-flex" :icon-size="14">
          <van-space :size="10">
            <img :src="item.icon" class="h-4 w-4" />
            <span class="text-xs text-1A1A1A">{{ item.bankName }}</span>
          </van-space>
          <h1 class="text-lg text-black my-1">{{ item.bankCardNumber }}</h1>
          <van-space :size="26">
            <span class="text-xs text-666666">姓名：{{ item.userName }}</span>
            <span class="text-xs text-666666">手机号：{{ item.telephone }}</span>
          </van-space>
          <template #icon="{ checked }">
            <img class="w-4" src="../assets/imgs/radio-checked.png" v-if="checked" />
            <img class="w-4" src="../assets/imgs/radio-unchecked.png" v-else />
          </template>
        </van-radio>
        <p class="text-xs text-black absolute top-2 right-2 p-2 cursor-pointer" @click="unbindBankCard(item)">解绑</p>
      </div>
    </van-radio-group>
    <div class="text-center mt-5">
      <van-button plain type="default" size="small" class="!border-none !text-3874F6 !px-8 !py-5 text-lg rounded-10"
        @click="visible = true">添加银行卡</van-button>
    </div>
  </section>
  <van-action-sheet v-model:show="visible" title="绑定银行卡">
    <bank-card-bind @onSuccess="onSuccess" :key="Date.now()" />
  </van-action-sheet>
</template>

<script setup lang="ts">
import { onMounted, ref, shallowRef } from 'vue';
import request from '../assets/request';
import BankCardBind from './BankCardBind.vue';
import { showConfirmDialog } from 'vant';

const props = defineProps<{
  cardId?: string;
}>();
const emit = defineEmits<{
  onSelect: [card: BankCardListData];
  onUnbind: [card: BankCardListData];
  onError: [msg: string];
}>();
const cards = shallowRef<BankCardListData[]>([]);
const visible = ref(false);
const checked = ref<string | undefined>(props.cardId);

const onChange = (value: string) => {
  const card = cards.value.find(item => item.cardId === value);
  emit('onSelect', card!);
}
const getBankCards = async () => {
  const res = await request.post<any, ResData<{ cards: BankCardListData[] }>>('xxx');
  if (res.code === '0000') {
    cards.value = res.retContent.cards;
  } else {
    emit('onError', res.msg);
  }
}
const onSuccess = () => {
  getBankCards();
  visible.value = false;
}
const unbindBankCard = (card: BankCardListData) => {
  showConfirmDialog({
    message: `确认要解绑${card.bankName || ''}${card.bankCardNumber}银行卡吗？`,
  })
    .then(() => {
      request.post<any, ResData<any>>('props.bankCardApis.unbindCard', {
        cardId: card.cardId
      }).then(res => {
        if (res.code === '0000') {
          if (checked.value === card.cardId) {
            checked.value = undefined;
          }
          emit('onUnbind', card);
          getBankCards();
        }
      })
    }).catch(() => { });
}
onMounted(getBankCards);
</script>