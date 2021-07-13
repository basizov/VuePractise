import { createRouter, RouteRecordRaw, createWebHistory, RouterHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/routes/RootPath.vue')
  },
  {
    path: '/users',
    component: () => import('@/routes/UserListPath.vue')
  },
  {
    path: '/users/:id',
    component: () => import('@/routes/UserDetailsPath.vue')
  }
];

const history: RouterHistory = createWebHistory(process.env.BASE_URL);

const router = createRouter({
  history,
  routes
});

export default  router;
