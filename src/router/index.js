import { createRouter, createWebHistory } from 'vue-router'
import TodoView from '../views/TodoView.vue'
// import LoginView from '../views/LoginView.vue'
// import ListView from '../views/ListView.vue'
// import VerifyView from '../views/VerifyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'todo',
      component: TodoView
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/ListView.vue')
    },
    {
      path: '/logout',
      name: 'logoutcom',
      component: () => import('../components/LogoutCom.vue')
    }
  ]
})

export default router
