import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const authRoutes: RouteRecordRaw[] = [
  {
    path: "/tasks",
    name: "Task",
    meta: {
      title: "赚钱任务",
    },
    component: () => import("../views/Tasks/index.vue"),
  },
  {
    path: "/tasks/score/list",
    name: "TaskScoreList",
    meta: {
      title: "积分余额",
    },
    component: () => import("../views/Tasks/ScoreList.vue"),
  },
  {
    path: "/tasks/cash/list",
    name: "TaskCashList",
    meta: {
      title: "现金余额",
    },
    component: () => import("../views/Tasks/CashList.vue"),
  },
  {
    path: "/tasks/withdraw",
    name: "TaskWithdraw",
    meta: {
      title: "提现",
    },
    component: () => import("../views/Tasks/Withdraw.vue"),
  },
];
const unAuthRoutes: RouteRecordRaw[] = [
  {
    path: "/home",
    name: "Home",
    meta: {
      title: "首页",
    },
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/mine",
    name: "Mine",
    meta: {
      title: "我的",
    },
    component: () => import("../views/Mine/index.vue"),
  },
  {
    path: "/device/info",
    name: "DeviceInfo",
    meta: {
      title: "设备信息",
    },
    component: () => import("../views/Device/Info.vue"),
  },
  {
    path: "/device/bind",
    name: "DeviceBind",
    meta: {
      title: "绑定设备",
    },
    component: () => import("../views/Device/Bind.vue"),
  },
  {
    path: "/device/qrcode/:id",
    name: "DeviceQrcodeBind",
    meta: {
      title: "绑定设备",
    },
    component: () => import("../views/Device/Qrcode.vue"),
  },
  {
    path: "/device/contacts",
    name: "DeviceContacts",
    meta: {
      title: "联系人",
    },
    component: () => import("../views/Device/Contacts.vue"),
  },
  {
    path: "/device/add-contact",
    name: "DeviceAddContact",
    meta: {
      title: "添加联系人",
    },
    component: () => import("../views/Device/AddContact.vue"),
  },
  {
    path: "/card-active-step",
    name: "CardActiveStep",
    meta: {
      title: "开卡步骤",
    },
    component: () => import("../views/CardActiveStep/index.vue"),
  },
  {
    path: "/add-customer-service",
    name: "AddCustomerService",
    meta: {
      title: "添加企业客服",
    },
    component: () => import("../views/AddCostomerService.vue"),
  },
  {
    path: "/tasks/withdraw/under-review",
    name: "TaskWithdrawUnderReview",
    meta: {
      title: "提现审核",
    },
    component: () => import("../views/Tasks/WithdrawUnderReview.vue"),
  },
  {
    path: "/charge/result/:id",
    name: "ChargeResult",
    meta: {
      title: "充值结果",
    },
    component: () => import("../views/Charge/Result.vue"),
  },
];

const routes: RouteRecordRaw[] = [
  ...authRoutes,
  ...unAuthRoutes,
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
    },
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("../views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_ROUTER_BASEURL),
  routes,
});

router.beforeEach((to, _, next) => {
  document.title = to.meta?.title as string;
  next();
});

export default router;
