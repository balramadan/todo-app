import { createRouter, createWebHistory } from 'vue-router'
import TodoView from '../views/TodoView.vue'
// import LoginView from '../views/LoginView.vue'
import ListView from '../views/ListView.vue'
// import VerifyView from '../views/VerifyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'todo',
      component: TodoView
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: LoginView
    // },
    {
      path: '/list',
      name: 'list',
      component: ListView
    },
    {
      path: '/logout',
      name: 'logoutcom',
      component: () => import('../components/LogoutCom.vue')
    }
    // {
    //   path: '/verify',
    //   name: 'verify',
    //   component: VerifyView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
