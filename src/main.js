import Vue from "vue";
import store from "./vuex/store";
import App from "./App";

new Vue({
  store, // inject store to all children
  el: 'body',
  components: {App}
});
