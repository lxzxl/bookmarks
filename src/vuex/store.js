/**
 * Created by steven on 5/6/16.
 */

import Vue from "vue";
import Vuex from "vuex";
import modals from "./modules/modals";
import panels from "./modules/panels";

Vue.use(Vuex);

const state = {
  isAuthenticated: false
};

const mutations = {
  AUTH_REQUIRED (state){
    state.isAuthenticated = false;

  },
  AUTH_SIGN_IN_OK (state) {
    state.isAuthenticated = true;
  },
  AUTH_SIGN_IN_FAILED(state){
    state.isAuthenticated = false;
  },
  ERROR_WILDDOG(state, err){
    console.log(err);
  }
};

export default new Vuex.Store({
  state,
  mutations,
  modules: {
    modals,
    panels
  },
  strict: true
});
