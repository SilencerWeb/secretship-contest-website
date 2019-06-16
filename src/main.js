import Vue from 'vue';

import App from './app';
import { router } from './router';
import { store } from './store';
import { i18n } from './locales';
import { getUrlParameters } from './utils';
import { AUTH_TOKEN } from './constants';

import 'normalize.css';
import './assets/styles/main.scss';


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
  mounted() {
    const urlParameters = getUrlParameters();
    const token = localStorage.getItem(AUTH_TOKEN);

    // We need to login user only if:
    // 1. User opened home page
    // 2. We have parameters provided by Telegram
    // 3. User isn't logged in yet
    if (this.$route.path === '/' && urlParameters && !token) {
      this.$store.dispatch('login', urlParameters);
    } else if (token) {
      this.$store.dispatch('verifyToken', token);
    } else {
      this.$store.commit('setIsAuthorizationCheckFinished', true);
    }

    this.$store.dispatch('fetchUsers');
  },
}).$mount('#app');
