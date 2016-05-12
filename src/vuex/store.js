/**
 * Created by steven on 5/6/16.
 */

import Vue from "vue";
import Vuex from "vuex";

import panels from './modules/panels';

Vue.use(Vuex);

const state = {
  isAuthenticated: false
};

const mutations = {
  AUTHENTICATED (state) {
    state.isAuthenticated = true;
  },
  LOGIN_REQUIRED (state, panel) {
    panel.flags.isEditing = !panel.flags.isEditing;
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
