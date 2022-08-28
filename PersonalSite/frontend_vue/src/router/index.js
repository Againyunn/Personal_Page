import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '../views/MainPage.vue'
import MenuActived from '../views/MenuActived.vue'
import ProfilePage from '../views/ProfilePage.vue'
import PortfolioPage from '../views/PortfolioPage.vue'
import InterestVisionPage from '../views/InterestVisionPage.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
    meta: {
      page: 1
    }
  },
  {
    path: '/MenuActived',
    name: 'MenuActived',
    component: MenuActived,
    meta: {
      page: 2
    }
  },
  {
    path: '/Profile',
    name: 'ProfilePage',
    component: ProfilePage,
    meta: {
      page: 3
    }
  },
  {
    path: '/Portfolio',
    name: 'PortfolioPage',
    component: PortfolioPage,
    meta:{
      page: 4
    }
  },
  {
    path: '/InterestVision',
    name: 'InterestVisionPage',
    component: InterestVisionPage,
    meta:{
      page: 5
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
