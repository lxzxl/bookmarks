<template>
  <div class="card" :class="{editing:panel.flags.isEditing}">
    <div class="card-action">
      <span class="card-title activator grey-text text-darken-4"><strong>{{ panel.name }}</strong></span>
      <div class="fixed-action-btn horizontal click-to-toggle">
        <a class="btn-floating btn" @click="toggleEditPanel(panel)">
          <i class="material-icons">{{ editLabel }}</i>
        </a>
        <ul>
          <li>
            <a class="btn-floating red" style="transform: scaleY(0.4) scaleX(0.4) translateY(0px) translateX(40px); opacity: 0;">
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
               class="btn-floating blue" style="transform: scaleY(0.4) scaleX(0.4) translateY(0px) translateX(40px); opacity: 0;">
              <i class="material-icons">delete</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="card-content">
      <div class="row">
        <fav-link v-for="link of panel.links" :link="link"></fav-link>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import FavLink from './FavLink';
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
        return this.panel.flags.isEditing ? 'cancel' : 'edit';
      }
    },
    ready(){
      this.panel.flags.isEditing && $(this.$el).find('.click-to-toggle>.btn').click();
    },
    components: {
      FavLink
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
  }

  .fixed-action-btn.horizontal ul li {
    margin-top: 0;
    margin-right: 3px;
  }
</style>
