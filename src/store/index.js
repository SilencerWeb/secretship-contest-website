import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';
import createLogger from 'vuex/dist/logger';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isUserLoggedIn: false,
    user: null,
    users: [],
  },
  getters,
  mutations,
  actions,
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
});
