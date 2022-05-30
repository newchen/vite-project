import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [{
  path: '/',
  name: 'home',
  component: () => import('../views/home/index.vue')
}, {
  path: '/about',
  name: 'about',
  component: () => import('../views/about/index.vue')
}]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
