import "material-design-icons/iconfont/material-icons.css";
import "materialize-css/bin/materialize.css";
import '../static/css/main.scss';

import 'materialize-css/dist/js/materialize';
import Vue from "vue";
import store from "./vuex/store";
import App from "./App";

new Vue({
  store, // inject store to all children
  el: 'body',
  components: {App}
});

$(document).on('ready', function () {

});
