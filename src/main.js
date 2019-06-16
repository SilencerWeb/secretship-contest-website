import Vue from 'vue';

import App from './app';
import router from './router';
import store from './store';
import { AUTH_TOKEN } from './constants';


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted() {
    const token = localStorage.getItem(AUTH_TOKEN);

    if (token) {
      this.$store.dispatch('verifyToken', token);
    }

    this.$store.dispatch('fetchUsers');
  },
}).$mount('#app');
