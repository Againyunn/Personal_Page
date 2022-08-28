import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '../views/MainPage.vue'
import MenuActived from '../views/MenuActived.vue'
import ProfilePage from '../views/ProfilePage.vue'

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
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
