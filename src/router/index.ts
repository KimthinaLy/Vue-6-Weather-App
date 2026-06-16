import { createRouter, createWebHistory } from 'vue-router'
import WeatherPage from '@/pages/WeatherPage.vue'

const routes = [
  {
    path: '/',
    name: 'weather',
    component: WeatherPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
