import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import viteCompression from "vite-plugin-compression";
import { VantResolver } from "@vant/auto-import-resolver";
import Components from "unplugin-vue-components/vite";
import VueDevtools from "vite-plugin-vue-devtools";
import AutoImport from "unplugin-auto-import/vite";

export default ({ mode }: any) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    base: env.VITE_ROUTER_BASEURL,
    server: {
      port: 5170,
      proxy: {
        "/gatewayTest": {
          target: "https://pay.360lingqian.com",
          changeOrigin: true,
        },
      },
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [VantResolver({ importStyle: false })],
      }),
      Components({
        resolvers: [VantResolver({ importStyle: false })],
      }),
      viteCompression(),
      VueDevtools(),
    ],
  });
};
