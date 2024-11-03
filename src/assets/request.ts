import axios from "axios";
import { showFailToast, showLoadingToast } from "vant";
import { useCommonStore } from "../stores";
import type { ToastWrapperInstance } from "vant";

const store = useCommonStore();
let needLoading: boolean = true;
let toast: ToastWrapperInstance | undefined;
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

instance.interceptors.request.use(
  (config) => {
    needLoading = config.headers?.skipLoading !== false;
    if (needLoading) {
      toast = showLoadingToast({
        message: store.loadingText,
        forbidClick: true,
        loadingType: "spinner",
        duration: 0,
        wordBreak: "break-word",
      });
    }
    return config;
  },
  (error) => {
    toast?.close();
    toast = undefined;
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    toast?.close();
    toast = undefined;
    if (response.data.code !== "0000") {
      if (!response.config.headers?.skipError) {
        showFailToast({
          message: response.data.msg || response.data.message,
          duration: 4000,
        });
      }
    }
    return response.data;
  },
  (error) => {
    toast?.close();
    toast = undefined;
    return Promise.reject(error);
  }
);

export default instance;
