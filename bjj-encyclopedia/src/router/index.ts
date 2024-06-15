import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/techniques',
      name: 'techniques',
      component: () => import('../views/TechniquesView.vue')
    },
    {
      path: '/createTechnique',
      name: 'createTechnique',
      component: () => import('../views/CreateTechniqueView.vue')
    },
    {
      path: '/editTechnique/:id',
      name: 'editTechnique',
      component: () => import('../views/EditTechniqueView.vue'),
      props: true
    }
  ]
})

export default router
