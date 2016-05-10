/**
 * Created by steven on 5/6/16.
 */

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  panelList: []
};

const mutations = {
  RECEIVE_PANELS (state, panels) {
    state.panelList = panels;
  },
  TOGGLE_EDIT_PANEL (state, panel) {
    panel.flags.isEditing = !panel.flags.isEditing;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
