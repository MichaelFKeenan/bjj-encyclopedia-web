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
      component: () => import('../views/technique/TechniquesView.vue')
    },
    {
      path: '/createTechnique',
      name: 'createTechnique',
      component: () => import('../views/technique/CreateTechniqueView.vue')
    },
    {
      path: '/editTechnique/:id',
      name: 'editTechnique',
      component: () => import('../views/technique/EditTechniqueView.vue'),
      props: true
    },
    {
      path: '/concepts',
      name: 'concepts',
      component: () => import('../views/concept/ConceptsView.vue')
    },
    {
      path: '/createConcept',
      name: 'createConcept',
      component: () => import('../views/concept/CreateConceptView.vue')
    },
    {
      path: '/editConcept/:id',
      name: 'editConcept',
      component: () => import('../views/concept/EditConceptView.vue'),
      props: true
    },
    {
      path: '/createAttempt/:techniqueId',
      name: 'createAttempt',
      component: () => import('../views/attempt/CreateAttemptView.vue'),
      props: true
    }
  ]
})

export default router
