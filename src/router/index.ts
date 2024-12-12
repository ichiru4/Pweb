import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('../views/home/index.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about/index.vue'),
    },

  ],
})

const links = [
  { name: 'Home', path: '/', component: () => import('@/views/home/index.vue') },
  { name: 'About', path: '/about', component: () => import('@/views/about/index.vue') },
  { name: 'Blogs', path: '/blogs', component: () => import('@/views/blogs/index.vue') },
  { name: 'Friends', path: '/friends', component: () => import('@/views/friends/index.vue') },
  { name: 'Contact', path: '/contact', component: () => import('@/views/contact/index.vue') }
];

// 动态生成路由配置
links.forEach(link => {
  router.addRoute({
    path: link.path,
    name: link.name,
    component: link.component
  });
});

export default router
