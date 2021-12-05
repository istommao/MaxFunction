import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Home from '@/views/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  }
]

export default createRouter({
  history: createWebHashHistory(), // Importantly, createWebHashHistory() use for redirect multi window,
  routes: routes,
})
