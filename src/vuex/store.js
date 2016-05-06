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
        },
        {
          name: 'Baidu',
          url: 'http://www.baidu.com'
        },
        {
          name: 'Baidu',
          url: 'http://www.baidu.com'
        },{
          name: 'Baidu',
          url: 'http://www.baidu.com'
        },
        {
          name: 'Baidu',
          url: 'http://www.baidu.com'
        },
        {
          name: 'Baidu',
          url: 'http://www.baidu.com'
        }
      ],
      flags: {
        isEditing: false
      }
    },
    {
      name: 'Work',
      links: [
        {
          name: 'Google',
          url: 'http://www.google.com'
        },
        {
          name: 'Google',
          url: 'http://www.google.com'
        },
        {
          name: 'Google',
          url: 'http://www.google.com'
        }
      ],
      flags: {
        isEditing: false
      }
    }
  ]
};

const mutations = {
  TOGGLE_EDIT_PANEL (state, panel) {
    panel.flags.isEditing = !panel.flags.isEditing;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
