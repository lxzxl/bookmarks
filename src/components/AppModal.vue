<template>
  <!-- Modal Structure -->
  <div id="modal-login" class="modal bottom-sheet">
    <div class="modal-content">
      <h5>Login
        <small class="red-text text-accent-4">{{ authErrorMessage }}</small>
      </h5>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate" v-model='email'>
          <label for="email">Email</label>
        </div>
        <div class="input-field col s12">
          <input id="password" type="password" class="validate" v-model="password">
          <label for="password">Password</label>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-action waves-effect waves-green btn-flat" @click="doSignIn">Sign In</a>
    </div>
  </div>
</template>

<script type='text/babel'>
  import  {isAuthenticated, authErrorMessage} from '../vuex/getters';
  import {singIn} from '../vuex/actions';

  export default {
    data: () => ({
      email: '',
      password: ''
    }),
    vuex: {
      getters: {
        isAuthenticated,
        authErrorMessage
      },
      actions: {
        singIn
      }
    },
    methods: {
      doSignIn () {
        this.singIn(this.email, this.password).then(isSuccess => isSuccess && $('#modal-login').closeModal());
      }
    },
    ready(){
      if (!this.isAuthenticated) $('#modal-login').openModal({
        dismissible: false
      });
    }
  };
</script>

<style>

</style>
