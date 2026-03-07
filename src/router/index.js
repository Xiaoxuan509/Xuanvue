import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Project from '../views/ProjectsView.vue'
import Teach from '../views/TeachingView.vue'
import Arduino from '../views/ArduinoTeach.vue'
import Esp32 from '../views/Esp32Teach.vue'
import Python from '../views/PythonTeach.vue'
import Forms from '../views/FormTeach.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/project', component: Project },
  { path: '/teach', component: Teach },
  { path: '/Arduino', component: Arduino },
  { path: '/Esp32', component: Esp32 },
  { path: '/Python', component: Python },
  { path: '/Forms', component: Forms }
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
