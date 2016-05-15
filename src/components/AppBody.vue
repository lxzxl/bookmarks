<template>
  <main id="body">
    <div class="row">
      <div class="col s12 m10 offset-m1 l8 offset-l2 panel">
        <panel v-for="panel of panelList" :key="$key" :panel="panel">
        </panel>
      </div>
      <div class="col s12 center-align panel-add">
        <button class="btn-large btn-floating waves-effect waves-light" @click="addPanel()">
          <i class="large material-icons">add</i>
        </button>
      </div>
    </div>
    <modal-fav-link></modal-fav-link>
  </main>
</template>

<script type="text/babel">
  import {isAuthenticated} from '../vuex/getters';
  import {initPanels, addPanel} from '../vuex/actions';
  import Panel from './Panel';
  import ModalFavLink from './ModalFavLink';

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
      Panel,
      ModalFavLink
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: #42b983;
  }

  .panel-add {
    margin-top: 10px;
  }
</style>
