/**
 * Created by steven on 16/5/10.
 */
'use strict';

import Vue from 'vue';

// initial state
const state = {
  all: {}// wilddog cannot perfectly support Array data type.
};

// mutations
const mutations = {
  PANELS_INIT (state, datasnapshot) {
    state.all = datasnapshot.val();
  },
  PANELS_TOGGLE_EDIT (state, panel) {
    panel.flags.isEditing = !panel.flags.isEditing;
  },
  PANELS_ADD (state, datasnapshot) {
    let key = datasnapshot.key();
    state.all.hasOwnProperty(key) || Vue.set(state.all, key, datasnapshot.val());
  }
};

export default {
  state,
  mutations
};
