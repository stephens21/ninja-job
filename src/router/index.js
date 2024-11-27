import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import JobView from '@/views/jobs/JobView.vue'
import JobDetailView from '@/views/jobs/JobDetailView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue')
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobView
    },
    {
      path:'/jobs/:id',
      name: 'jobDetail',
      component: JobDetailView,
      props: true
    },
    // redirect
    {
      path: '/all-jobs',
      redirect: '/jobs',
    },
    // catch all 404 view
    {
      path:'/:catchAll(.*)',
      name: 'notFount',
      component: NotFoundView
    }
  ]
})

export default router
