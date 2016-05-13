<template>
  <!-- Modal Structure -->
  <div id="modal-login" class="modal bottom-sheet">
    <div class="modal-content">
      <div class="row">
        <div class="col s12 m5">
          <h5>Sign in to see more</h5>
        </div>
        <div class="col s12 m7">
          <h5>
            <small class="red-text text-accent-4">{{ authErrorMessage }}</small>
          </h5>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12 m6">
          <input id="email" type="email" class="validate" v-model='email' @keyup.enter="doSignIn">
          <label for="email">Email</label>
        </div>
        <div class="input-field col s12 m6">
          <input id="password" type="password" class="validate" v-model="password" @keyup.enter="doSignIn">
          <label for="password">Password</label>
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
  import  {isAuthenticated, authErrorMessage} from '../vuex/getters';
  import {checkAuth, singIn} from '../vuex/actions';

  export default {
    data(){
      return {
        email: 'lxz318@aliyun.com',
        password: ''
      }
    },
    vuex: {
      getters: {
        isAuthenticated,
        authErrorMessage
      },
      actions: {
        checkAuth,
        singIn
      }
    },
    methods: {
      doSignIn () {
        this.singIn(this.email, this.password).then(isSuccess => {
          if (isSuccess) {
            $('#modal-login').closeModal();
            this.password = '';
          }
        });
      }
    },
    ready(){
      this.checkAuth().then(
        isSignIn => !isSignIn && $('#modal-login').openModal({
          dismissible: false
        })
      );
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
