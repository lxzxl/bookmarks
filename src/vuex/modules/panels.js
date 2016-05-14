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
  PANELS_INIT (state, panels) {
    state.all = panels || [];
  },
  PANELS_TOGGLE_EDIT (state, panel) {
    panel.flags.isEditing = !panel.flags.isEditing;
  },
  PANELS_ADD (state, panel) {
    state.all.push(panel);
  }
};

export default {
  state,
  mutations
};
