<template>
  <div class="modal confirm">
    <div class="modal-content">
      <p>{{ modal.msg }}</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class=" modal-action waves-effect waves-green btn-flat" @click="confirm">Yes</a>
      <a href="#!" class=" modal-action waves-effect waves-green btn-flat" @click="cancel">No</a>
    </div>
  </div>
</template>

<script type="text/babel">
  export default{
    vuex: {
      getters: {
        modal ({modals}) {
          return modals.CONFIRM;
        }
      },
      actions: {
        confirm(){
          this.modal.confirm();
        },
        cancel(){
          this.modal.cancel();
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

</style>
