<template>
  <div id="body" class="grey lighten-1">
    <div class="row">
      <div class="col s12 m10 offset-m1 l8 offset-l2">
        <panel v-for="panel of panelList" :panel="panel"></panel>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import {getAllPanels} from '../vuex/actions';
  import Panel from './Panel';

  export default {
    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.

      }
    },
    vuex: {
      getters: {
        panelList: (state) => state.panelList
      },
      actions: {
        getAllPanels
      }
    },
    created () {
      this.getAllPanels()
    },
    components: {
      Panel
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #body {
    height: 80%;
  }

  h1 {
    color: #42b983;
  }
</style>
