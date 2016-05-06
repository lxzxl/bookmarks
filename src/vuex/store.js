/**
 * Created by steven on 5/6/16.
 */

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  panelList: [
    {
      name: 'Popular',
      links: [
        {
          name: 'Baidu',
          url: 'http://www.baidu.com'
        }
      ]
    },
    {
      name: 'Work',
      links: [
        {
          name: 'Google',
          url: 'http://www.google.com'
        }
      ]
    }
  ]
};

const mutations = {
  ADD_LINK (state) {
    const newPanel = {
      text: 'New note',
      favorite: false
    };
    state.panels.push(newPanel);
  },

  EDIT_LINK (state, text) {
    state.activeNote.text = text;
  },

  DELETE_LINK (state) {
    state.panels.$remove(state.activeNote);
    state.activeNote = state.notes[0];
  }
};

export default new Vuex.Store({
  state,
  mutations
});
