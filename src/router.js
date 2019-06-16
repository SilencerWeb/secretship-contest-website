import Vue from 'vue';
import Router from 'vue-router';

import HomePage from './pages/home';
import UserPage from './pages/user';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/user/:id',
      component: UserPage,
    },
  ],
});
