import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/index.vue'),
    meta: { darkMode: false }
  },  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/components/Website/Contact.vue'),
    meta: { darkMode: false }
  },  {
    path: '/about',
    name: 'about',
    component: () => import('@/components/Website/About.vue'),
    meta: { darkMode: false }

  },{
    path: '/projects',
    name: 'projects',
    component: () => import('@/components/Website/Projects.vue')
  },{
    path: '/experience',
    name: 'experience',
    component: () => import('@/components/Website/Experience.vue'),
    meta: { darkMode: false }

  },{
    path: '/services',
    name: 'services',
    component: () => import('@/components/Website/Services.vue')
  },{
    path: '/contact',
    name: 'contact',
    component: () => import('@/components/Website/Contact.vue')
  },{
    path: '/resume',
    name: 'resume',
    component: () => import('@/components/Website/Home.vue')
  }
  

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
