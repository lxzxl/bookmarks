<template>
  <!-- Modal Structure -->
  <div class="modal">
    <div class="modal-content">
      <div class="row">
        <div class="input-field col s6">
          <input :value="modal.link.name" @input="updateName"
                 placeholder="{{ linkName }}" type="text" class="validate">
          <label>Name</label>
        </div>
        <div class="input-field col s6">
          <input :value="modal.link.url" @input="updateUrl" type="url" class="validate">
          <label>Url</label>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-action btn-flat waves-effect waves-light" name="action" @click="saveFavLink(modal.panelKey,modal.link)">Save
      </button>
      <button class="modal-action btn-flat waves-effect waves-light" name="action" @click="close">Cancel
      </button>
    </div>
  </div>
</template>

<script type="text/babel">
  import {Link} from '../api/schema';
  import {saveFavLink} from '../vuex/actions';

  const _modalName = 'FAVLINK';

  export default {
    vuex: {
      getters: {
        modal ({modals}) {
          return modals.FAVLINK;
        }
      },
      actions: {
        saveFavLink,
        close({dispatch}){
          dispatch('MODAL_CLOSE', _modalName);
        },
        updateName({dispatch}, e){
          dispatch('UPDATE_LINK_NAME', e.target.value);
        },
        updateUrl({dispatch}, e){
          dispatch('UPDATE_LINK_URL', e.target.value);
        }
      }
    },
    computed: {
      linkName(){
        return this.modal.link.name
      },
      linkUrl() {
        return this.modal.link.url
      }
    },
    watch: {
      ['modal.isActive'](val){// watch modal's isActive value change.
        if (val) {
          $(this.$el).openModal({
            dismissible: false
          });
        } else {
          $(this.$el).closeModal();
        }
      }
    },
    components: {}
  };
</script>

<style>
  body {
    background-color: #ff0000;
  }
</style>
