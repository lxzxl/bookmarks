<template>
  <div class="card">
    <div class="card-action">
      <span class="card-title activator grey-text text-darken-4">{{ panel.name }}</span>
      <div class="fixed-action-btn horizontal click-to-toggle">
        <a class="btn-floating btn">
          <i class="material-icons">more_vert</i>
        </a>
        <ul>
          <li>
            <a class="btn-floating red" style="transform: scaleY(0.4) scaleX(0.4) translateY(0px) translateX(40px); opacity: 0;">
              <i class="material-icons">add</i>
            </a>
          </li>
          <li>
            <a @click="toggleEditPanel(panel)"
               class="btn-floating green" style="transform: scaleY(0.4) scaleX(0.4) translateY(0px) translateX(40px); opacity: 0;">
              <i class="material-icons">{{ editLabel }}</i>
            </a>
          </li>
          <li>
            <a class="btn-floating blue" style="transform: scaleY(0.4) scaleX(0.4) translateY(0px) translateX(40px); opacity: 0;">
              <i class="material-icons">delete</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="card-content" :class="{'deep-orange':panel.flags.isEditing}">
      <fav-link v-for="link of panel.links" :link="link"></fav-link>
    </div>
  </div>
</template>

<script>
  import FavLink from './FavLink';
  import {toggleEditPanel} from '../vuex/actions'

  export default{
    props: ['panel'],
    data(){
      return {}
    },
    vuex: {
      getters: {},
      actions: {
        toggleEditPanel
      }
    },
    computed: {
      editLabel () {
        return this.panel.flags.isEditing ? 'save' : 'edit'
      }
    },
    components: {
      FavLink
    }
  }
</script>

<style scoped>
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
