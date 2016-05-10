/**
 * Created by steven on 16/5/10.
 */
'use strict';

// initial state
const state = {
  all: []
};

// mutations
const mutations = {
  RECEIVE_PANELS (state, panels) {
    state.all = panels;
  },
  TOGGLE_EDIT_PANEL (state, panel) {
    panel.flags.isEditing = !panel.flags.isEditing;
  }
};

export default {
  state,
  mutations
};
