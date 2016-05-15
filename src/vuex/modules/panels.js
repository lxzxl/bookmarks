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
  PANELS_CLOSE_EDIT (state, key) {
    state.all.hasOwnProperty(key) && state.all[key].flags.isEditing && (state.all[key].flags.isEditing = false);
  },
  PANELS_ADD (state, datasnapshot) {
    let key = datasnapshot.key();
    let p = datasnapshot.val();
    p.flags.isEditing = true;// set new added panel in editing mode.
    state.all.hasOwnProperty(key) || Vue.set(state.all, key, p);
  },
  PANELS_UPDATE (state, datasnapshot) {
    let key = datasnapshot.key();
    let p = datasnapshot.val();
    p.flags.isEditing = state.all[key].flags.isEditing;// keep editing mode.
    Vue.set(state.all, key, p);
  },
  PANELS_REMOVE (state, datasnapshot) {
    let key = datasnapshot.key();
    state.all.hasOwnProperty(key) && Vue.delete(state.all, key);
  },

  PANELS_ERROR (state, err, key){
    state.all.hasOwnProperty(key) && (state.all[key].flags.isEditing = false);
  }
};

export default {
  state,
  mutations
};
