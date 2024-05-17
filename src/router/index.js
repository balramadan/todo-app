import { createRouter, createWebHistory } from 'vue-router'
import TodoView from '../views/TodoView.vue'
import ListView from '../views/ListView.vue'
import LogoutCom from '../components/LogoutCom.vue'
// import LoginView from '../views/LoginView.vue'
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
      component: ListView
    },
    {
      path: '/logout',
      name: 'logoutcom',
      component: LogoutCom
    }
  ]
})

export default router
