import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Login from './../components/login';
import Head from './../components/blog.vue';
Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Blog',
    component: () => import('./../components/blog.vue'),
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login,
      },
      {
        path: '/head',
        name: 'Head',
        component: Head,
      }
    ]
  }
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
