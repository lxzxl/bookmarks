<template>
  <app-visitor v-if="!isAuthenticated"></app-visitor>
  <app-wrapper v-if="isAuthenticated"></app-wrapper>

  <app-modal></app-modal>
</template>
<script type="text/babel">
  import AppVisitor from './components/AppVisitor';
  import AppWrapper from './components/AppWrapper';
  import AppModal from './components/AppModal';

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
      AppModal
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
