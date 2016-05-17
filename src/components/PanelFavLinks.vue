<template>
  <div v-for="link of panel.links" class="col s6 m4 l3 link">
    <div>
      <a class="waves-effect waves-light btn truncate" href="{{ link.url }}" target="_blank">
        <span>{{ link.name }}</span>
      </a>
    </div>
    <div class="actions">
      <button class="btn col s6 blue" @click="openFavLinkModal(panelKey,link)">
        <i class="material-icons">edit</i>
      </button>
      <button class="btn col s6 red" @click="openAlert(link)">
        <i class="material-icons">delete_forever</i>
      </button>
    </div>
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

  .btn {
    padding: 0 .5rem;
    width: 100%;
    white-space: nowrap;
  }

  .actions {
    width: 100%;
    padding: 0 .75rem;
    position: absolute;
    top: 0;
    left: 0;
  }

  .invisible {
    visibility: hidden;
  }
</style>
