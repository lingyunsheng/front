import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Login from './../components/login';
import Blog from './../components/blog.vue';
import Pins from './../components/pins';
Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/books',
    name: 'Books',
    component: () => import('./../components/books.vue'),
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('./../components/terms.vue'),
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('./../components/detail.vue'),
  },
  {
    path: '/pins',
    name: 'Pins',
    component: Pins,
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ './../components/login'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
