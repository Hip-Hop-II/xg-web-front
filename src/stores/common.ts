import { defineStore } from "pinia";
import { ref } from "vue";

export default defineStore("common", () => {
  const loadingText = ref<string>("加载中...");
  function showLoading(text: string) {
    loadingText.value = text;
  }
  return {
    loadingText,
    showLoading,
  };
});
