import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Project from '../views/ProjectsView.vue'
import Teach from '../views/TeachingView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/project', component: Project },
  { path: '/teach', component: Teach }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 100,
      }
    }

    if (savedPosition) {
      return savedPosition
    }

    return { top: 0 } 
  }
})

export default router
