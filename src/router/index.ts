import { createRouter, createWebHistory } from 'vue-router'
import WorkExperiencesView from '@/views/ExperiencesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'experiences',
      component: WorkExperiencesView
    },
    {
      path: '/projects',
      name: 'projects',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/ProjectsView.vue')
    }
  ]
})

export default router
