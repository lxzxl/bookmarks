<template>
  <div v-for="link of panel.links" class="col s6 m4 l3 link">
    <a class="waves-effect waves-light btn truncate" href="{{ link.url }}" target="_blank">
      <span>{{ link.name }}</span>
    </a>
  </div>
  <div :class="{invisible:!panel.flags.isEditing}" class="col s6 m4 l3 link">
    <button class="btn waves-effect waves-light" name="add-link" @click="openFavLinkModal(panelKey)">
      <i class="material-icons">add</i>
    </button>
  </div>
</template>

<script type="text/babel">
  import {openFavLinkModal} from '../vuex/actions';

  export default{
    props: ['panelKey', 'panel'],
    vuex: {
      actions: {
        openFavLinkModal
      }
    }
  }
</script>

<style scoped>
  .link {
    height: 50px;
  }

  i.left {
    margin-right: 5px;
  }

  .btn {
    padding: 0 0.5rem;
    width: 100%;
    white-space: nowrap;
  }

  .invisible {
    visibility: hidden;
  }
</style>
