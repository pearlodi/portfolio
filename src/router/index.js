import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/index.vue'),
    meta: { darkMode: false }

  },
  // },  {
  //   path: '/contact',
  //   name: 'contact',
  //   component: () => import('@/components/website/Contact.vue'),
  //   meta: { darkMode: false }
  // },  
  {
    path: '/about',
    name: 'about',
    component: () => import('@/components/website/About.vue'),
    meta: { darkMode: false }

  },{
    path: '/projects',
    name: 'projects',
    component: () => import('@/components/website/Projects.vue')
  },{
    path: '/experience',
    name: 'experience',
    component: () => import('@/components/website/Experience.vue'),
    meta: { darkMode: false }

  },{
    path: '/services',
    name: 'services',
    component: () => import('@/components/website/Services.vue')
  },{
    path: '/contact',
    name: 'contact',
    component: () => import('@/components/website/Contact.vue')
  },{
    path: '/resume',
    name: 'resume',
    component: () => import('@/components/website/Home.vue')
  }
  

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
