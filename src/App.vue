<template>
  <app-header></app-header>
  <app-body>hello</app-body>
  <app-footer></app-footer>
  <app-modal></app-modal>
</template>
<script type="text/babel">
  import AppHeader from './components/AppHeader';
  import AppBody from './components/AppBody';
  import AppFooter from './components/AppFooter';
  import AppModal from './components/AppModal';

  export default {
    components: {
      AppHeader,
      AppBody,
      AppFooter,
      AppModal
    }
  }
</script>

<style>

</style>
