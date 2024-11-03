export const idCardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

export const isValidIdCard = (id: string) => idCardReg.test(id);

export const phoneNumReg = /^1[3-9]\d{9}$/;

export const isValidPhoneNum = (phone: string) => phoneNumReg.test(phone);

export const debitCardRegex = /^\d{16,19}$/;

export const isValidDebitCard = (str: string) => debitCardRegex.test(str);

export const creditCardRegex = /^(3\d{15}|5[1-5]\d{14}|6\d{15})$/;

export const isValidCreditCard = (str: string) => creditCardRegex.test(str);

export const expiryDateRegex = /^(0[1-9]|1[0-2])([2-9][0-9])$/;

export const isValidExpiryDate = (d: string) => expiryDateRegex.test(d);

export const isWechatBrowser = () =>
  /micromessenger/gi.test(navigator.userAgent);

export const isAlipayBrowser = () => /alipayclient/gi.test(navigator.userAgent);

export const isPC = () => /Windows|Macintosh|Linux/gi.test(navigator.userAgent);

export const isH5 = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/gi.test(
    navigator.userAgent
  );

export const isMobileWechatBrowser = () => isH5() && isWechatBrowser();

export const isMobileWechatOrAlipay = () =>
  isMobileWechatBrowser() || isAlipayBrowser();

export const isPCWechatBrowser = () =>
  /MacWechat|WindowsWechat/gi.test(navigator.userAgent);

export const getSourceType = () => {
  if (isH5()) {
    if (isWechatBrowser()) {
      return "WxWap";
    } else if (isAlipayBrowser()) {
      return "AliWap";
    }
    return "H5";
  }
  return "PC";
};

export function formatBankCardNumber(bankCardNumber: string): string {
  bankCardNumber = bankCardNumber.replace(/\s/g, "");

  const formattedBankCardNumber = bankCardNumber.replace(
    /(\d{4})(?=\d)/g,
    "$1 "
  );

  return formattedBankCardNumber;
}
