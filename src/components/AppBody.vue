<template>
  <main id="body">
    <div class="row">
      <div class="col s12 m10 offset-m1 l8 offset-l2">
        <panel v-for="panel of panelList" :panel="panel"></panel>
      </div>
      <div class="col s12 center-align">
        <button class="btn-large btn-floating waves-effect waves-light" @click="addPanel()">
          <i class="large material-icons">add</i>
        </button>
      </div>
    </div>
  </main>
</template>

<script type="text/babel">
  import {isAuthenticated} from '../vuex/getters';
  import {initPanels, addPanel} from '../vuex/actions';
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
        isAuthenticated,
        panelList: ({panels}) => panels.all
      },
      actions: {
        initPanels,
        addPanel
      }
    },
    created () {
      if (isAuthenticated) this.initPanels()
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
