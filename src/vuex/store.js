/**
 * Created by steven on 5/6/16.
 */

import Vue from "vue";
import Vuex from "vuex";

import panels from './modules/panels';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    panels
  },
  strict: true
});
