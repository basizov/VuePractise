import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Main from '@/pages/Main.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts',
    component: () => import('@/pages/Posts.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
