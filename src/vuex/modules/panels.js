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
    state.all = datasnapshot.val() || {};
  },
  PANELS_TOGGLE_EDIT (state, panel) {
    panel.flags.isEditing = !panel.flags.isEditing;
  },
  PANELS_ADD (state, datasnapshot) {
    let key = datasnapshot.key();
    let p = datasnapshot.val();
    p.flags.isEditing = true;// set new added panel in editing mode.
    state.all.hasOwnProperty(key) || Vue.set(state.all, key, p);
  },
  PANELS_UPDATE (state, datasnapshot) {
    let p = datasnapshot.val();
    p.flags.isEditing = false;
    Vue.set(state.all, datasnapshot.key(), datasnapshot.val());
  },
  PANELS_REMOVE (state, datasnapshot) {
    let key = datasnapshot.key();
    state.all.hasOwnProperty(key) && Vue.delete(state.all, key);
  }
};

export default {
  state,
  mutations
};
