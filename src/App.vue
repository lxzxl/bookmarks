<template>
  <app-wrapper v-if="isAuthenticated"></app-wrapper>

  <app-modal></app-modal>
</template>
<script type="text/babel">
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
      AppWrapper,
      AppModal
    }
  }
</script>

<style>

</style>
