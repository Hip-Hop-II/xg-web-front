interface ResData<T> {
  code: string;
  msg: string;
  message?: string;
  retContent: T;
}

interface BankCardListData {
  bankCardNumber: string;
  bankName: string;
  icon: string;
  telephone: string;
  userName: string;
  cardId: string;
  bindCardType: {
    bindType: string;
    expireSecond: string;
    url: string;
  };
}
