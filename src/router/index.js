import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/index.vue'),
        meta: { title: "pearl - Home", transition: 'slide-left'  },
        
  },{
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
            meta: { title: "Pearl - About" },

  },{
    path: '/projects',
    name: 'projects',
    component: () => import('@/views/Projects.vue'),
        meta: { title: "Pearl - Projects" },

  },{
    path: '/experience',
    name: 'experience',
    component: () => import('@/views/Experience.vue'),
            meta: { title: "Pearl - Experience" },

  },{
    path: '/articles',
    name: 'articles',
    component: () => import('@/views/Services.vue'),
        meta: { title: "Pearl - Articles" },

  },{
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/Contact.vue'),
        meta: { title: "Pearl - Contact" },

  },{
    path: '/resume',
    name: 'resume',
    component: () => import('@/views/Home.vue'),
        meta: { title: "Pearl - Resume" },

  },
  // {
  //   path: '/:catchAll(.*)',
  //   redirect: { name: 'home' } 
  // }
  

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // If a saved position exists, scroll to that position
      return savedPosition;
    } else {
      // Scroll to the top of the new page by default
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Default Title";
  next();
});


export default router
