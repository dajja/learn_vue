import { createRouter, createWebHistory } from 'vue-router'
import AppVue from '../App.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../components/Homie.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: AppVue
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.                                                                                    
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/home/:id',
      name: 'HomeDetail',
      component: () => import('../views/HomeDetail.vue')
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: () => import('../views/Pinia.vue')
    },
    {
      path: '/:notfound(.*)',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router
