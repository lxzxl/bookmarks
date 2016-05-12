<template>
  <!-- Modal Structure -->
  <div id="modal-login" class="modal bottom-sheet">
    <div class="modal-content">
      <h4>Login</h4>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate" :value="message">
          <label for="email">Email</label>
        </div>
        <div class="input-field col s12">
          <input id="password" type="password" class="validate" :value="message">
          <label for="password">Password</label>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Sign In</a>
    </div>
  </div>
</template>

<script type='text/babel'>
  import {login} from '../vuex/actions'
  export default{
    props: [],
    vuex: {
      getters: {
        isAuthenticated: ({isAuthenticated}) => isAuthenticated
      },
      actions: {
        login
      }
    },
    ready(){
      if (!this.isAuthenticated) $('#modal-login').openModal({
        dismissible: false
      });
    }
  }
</script>

<style>

</style>
