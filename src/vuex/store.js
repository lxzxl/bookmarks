/**
 * Created by steven on 5/6/16.
 */

import Vue from "vue";
import Vuex from "vuex";
import panels from "./modules/panels";

Vue.use(Vuex);

const state = {
  isAuthenticated: false,
  authErrorMessage: ''
};

const mutations = {
  AUTH_SIGN_IN_OK (state) {
    state.isAuthenticated = true;
    state.authErrorMessage = '';
  },
  AUTH_SIGN_IN_FAILED(state){
    state.isAuthenticated = false;
    state.authErrorMessage = 'Invalid email or password';
  },
  AUTH_SIGN_OUT(state){
    state.isAuthenticated = false;
    state.authErrorMessage = 'Please sign in...';
  }
};

export default new Vuex.Store({
  state,
  mutations,
  modules: {
    panels
  },
  strict: true
});
