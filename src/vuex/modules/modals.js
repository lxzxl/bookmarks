/**
 * Created by steven on 16/5/15.
 */
'use strict';

// initial state
const state = {
  LOGIN: {// login modal.
    isActive: null,
    errorMsg: null
  },
  FAVLINK: {
    isActive: null
  }
};

// mutations
const mutations = {
  MODAL_OPEN(state, type, otherAttrs){
    let modal = state[type];
    modal.isActive = true;
    for (let k in otherAttrs) {
      modal.hasOwnProperty(k) && (modal[k] = otherAttrs[k]);
    }
  },
  MODAL_CLOSE(state, type){
    state[type].isActive = false;
  }
};

export default {
  state,
  mutations
};
