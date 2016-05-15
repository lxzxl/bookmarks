<template>
  <app-visitor v-if="!isAuthenticated"></app-visitor>
  <app-wrapper v-if="isAuthenticated"></app-wrapper>

  <modal-login></modal-login>
</template>
<script type="text/babel">
  import AppVisitor from './components/AppVisitor';
  import AppWrapper from './components/AppWrapper';
  import ModalLogin from './components/ModalLogin';

  import {isAuthenticated} from './vuex/getters';

  export default {
    vuex: {
      getters: {
        isAuthenticated
      }
    },
    components: {
      AppVisitor,
      AppWrapper,
      ModalLogin
    }
  }
</script>

<style>
  body {

  }

  main {
    flex: 1 0 auto;
  }

</style>
