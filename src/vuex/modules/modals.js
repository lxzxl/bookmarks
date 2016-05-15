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
    isActive: null,
    panelKey: null,
    link: {}
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
  },
  UPDATE_LINK_NAME(state, name){
    state.FAVLINK.link.name = name;
  },
  UPDATE_LINK_URL(state, url){
    state.FAVLINK.link.url = url;
  }
};

export default {
  state,
  mutations
};
