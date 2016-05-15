<template>
  <div class="card" :class="{editing:panel.flags.isEditing}">
    <div class="card-action">
      <input v-show="panel.flags.isEditing" placeholder="{{ panel.name }}" name="panel-name" type="text" class="validate" required>
      <span v-else class="card-title grey-text text-darken-4">
        <i class="material-icons">bookmark</i><strong>{{ panel.name }}</strong>
      </span>
      <div class="fixed-action-btn horizontal click-to-toggle">
        <a class="btn-floating btn blue-grey darken-4" @click="toggleEditPanel(panel)">
          <i class="material-icons">{{ editLabel }}</i>
        </a>
        <ul>
          <li>
            <a class="btn-floating" style="transform: scaleY(0.4) scaleX(0.4) translateY(0px) translateX(40px); opacity: 0;">
              <i class="material-icons">add</i>
            </a>
          </li>
          <li>
            <a @click="updatePanel(key,panel)"
               class="btn-floating green" style="transform: scaleY(0.4) scaleX(0.4) translateY(0px) translateX(40px); opacity: 0;">
              <i class="material-icons">save</i>
            </a>
          </li>
          <li>
            <a @click="removePanel(key)"
               class="btn-floating red accent-4" style="transform: scaleY(0.4) scaleX(0.4) translateY(0px) translateX(40px); opacity: 0;">
              <i class="material-icons">delete</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="card-content">
      <div class="row">
        <panel-fav-link :panel-key="key" :panel="panel"></panel-fav-link>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import PanelFavLink from './PanelFavLinks';
  import {toggleEditPanel, updatePanel, removePanel} from '../vuex/actions';

  export default{
    props: ['key', 'panel'],
    data(){
      return {}
    },
    vuex: {
      getters: {},
      actions: {
        toggleEditPanel,
        updatePanel,
        removePanel
      }
    },
    computed: {
      editLabel () {
        return this.panel.flags.isEditing ? 'close' : 'edit';
      }
    },
    watch: {
      ['panel.flags.isEditing'](val){
        let $fabMenu = $(this.$el).find('.fixed-action-btn.click-to-toggle');
        val ? $fabMenu.openFAB() : $fabMenu.closeFAB()
      }
    },
    ready(){
      $(document).off('click.fixedActionBtn');
      this.panel.flags.isEditing && $(this.$el).find('.fixed-action-btn.click-to-toggle').openFAB();
    },
    components: {
      PanelFavLink
    }
  }
</script>

<style scoped>
  .editing {
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .fixed-action-btn {
    position: absolute;
    display: inline-block;
  }

  .fixed-action-btn.horizontal ul {
    right: 40px;
    max-width: 150px;
  }

  .fixed-action-btn.horizontal ul li {
    margin-top: 0;
    margin-right: 3px;
  }

  input[name=panel-name] {
    height: 2.5rem;
    max-width: 250px;
    margin-bottom: 0;
    font-size: 24px;
  }


</style>
