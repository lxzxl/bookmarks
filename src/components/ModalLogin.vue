<template>
  <!-- Modal Structure -->
  <div class="modal bottom-sheet">
    <div class="modal-content">
      <div class="row">
        <div class="col s12 m5">
          <h5>Sign in to see more</h5>
        </div>
        <div class="col s12 m7">
          <h5>
            <small class="red-text text-accent-4">{{ modal.errorMsg }}</small>
          </h5>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12 m6">
          <input type="email" class="validate" v-model='email' @keyup.enter="doSignIn">
          <label>Email</label>
        </div>
        <div class="input-field col s12 m6">
          <input type="password" class="validate" v-model="password" @keyup.enter="doSignIn">
          <label>Password</label>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-action btn waves-effect waves-light" type="submit" name="action" @click="doSignIn">Sign In
        <i class="material-icons right">send</i>
      </button>
    </div>
  </div>
</template>

<script type='text/babel'>
  import  {isAuthenticated} from '../vuex/getters';
  import {checkAuth, singIn} from '../vuex/actions';

  export default {
    data(){
      return {
        email: 'lxz318@aliyun.com',
        password: null
      }
    },
    vuex: {
      getters: {
        isAuthenticated,
        modal ({modals}) {
          return modals.LOGIN;
        }
      },
      actions: {
        checkAuth,
        singIn
      }
    },
    methods: {
      doSignIn () {
        this.singIn(this.email, this.password);
      }
    },
    watch: {
      ['modal.isActive'](val){// watch isActive value change.
        if (val) {
          $(this.$el).openModal({
            dismissible: false
          });
        } else {
          $(this.$el).closeModal();
          this.password = null;
        }
      }
    },
    compiled(){
      this.checkAuth();
    }
  };
</script>

<style scoped>
  .row {
    margin-bottom: 0;
  }

  .modal {
    max-height: none;
  }

  .modal-content, .modal-footer {
    padding: 0 16px;
  }

  .modal-footer {
    padding-right: 24px;
  }
</style>
