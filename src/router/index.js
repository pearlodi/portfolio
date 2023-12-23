import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/index.vue'),
        meta: { title: "pearl - Home" },
  },  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/components/Website/Contact.vue'),
            meta: { title: "Pearl - Contact" },
  },  {
    path: '/about',
    name: 'about',
    component: () => import('@/components/Website/About.vue'),
            meta: { title: "Pearl - About" },

  },{
    path: '/projects',
    name: 'projects',
    component: () => import('@/components/Website/Projects.vue'),
        meta: { title: "Pearl - Projects" },

  },{
    path: '/experience',
    name: 'experience',
    component: () => import('@/components/Website/Experience.vue'),
            meta: { title: "Pearl - Experience" },

  },{
    path: '/services',
    name: 'services',
    component: () => import('@/components/Website/Services.vue'),
        meta: { title: "Pearl - Services" },

  },{
    path: '/contact',
    name: 'contact',
    component: () => import('@/components/Website/Contact.vue'),
        meta: { title: "Pearl - Contact" },

  },{
    path: '/resume',
    name: 'resume',
    component: () => import('@/components/Website/Home.vue'),
        meta: { title: "Pearl - Resume" },

  },
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'home' } 
  }
  

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
