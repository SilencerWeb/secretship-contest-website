import Vue from 'vue';
import axios from 'axios';

import App from './app';
import router from './router';
import { getUrlParameters } from './utils';


Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  mounted() {
    const urlParameters = getUrlParameters();

    if (urlParameters) {
      const { id, first_name, last_name, username, photo_url, auth_date, hash } = urlParameters;

      if (!id || !first_name || !auth_date || !hash) return; // last_name, username and photo_url we don't include because user may not have them

      const requestData = {
        id,
        first_name,
        auth_date,
        hash,
      };

      // Because user may not have these parameters
      if (last_name) requestData.last_name = last_name;
      if (username) requestData.username = username;
      if (photo_url) requestData.photo_url = photo_url;

      axios.post('http://secretship-contest-api.openode.io/login', requestData);
    }
  },
}).$mount('#app');
