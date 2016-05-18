<template>
  <div class="modal confirm">
    <div class="modal-content">
      <blockquote>
        <p class="message">{{ modal.msg }}</p>
      </blockquote>
    </div>
    <div class="modal-footer">
      <a href="#!" class=" modal-action waves-effect waves-green btn-flat" @click="confirm">Yes</a>
      <a href="#!" class=" modal-action waves-effect waves-green btn-flat" @click="cancel">No</a>
    </div>
  </div>
</template>

<script type="text/babel">
  import api from '../api';
  export default{
    vuex: {
      getters: {
        modal ({modals}) {
          return modals['CONFIRM'];
        }
      },
      actions: {
        confirm(){
          this.modal.onConfirm && this.modal.onConfirm();
        },
        cancel(){
          this.modal.onCancel && this.modal.onCancel();
        }
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
    }
  };
</script>

<style scoped>
  .modal-content {
    padding-bottom: 10px;
  }

  .message {
    font-size: 1.2rem;
  }
</style>
