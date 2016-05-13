<template>
  <app-header></app-header>
  <app-body></app-body>
  <app-footer></app-footer>
</template>
<style>
</style>
<script type="text/babel">
  import AppHeader from './AppHeader';
  import AppBody from './AppBody';
  import AppFooter from './AppFooter';


  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    components: {
      AppHeader,
      AppBody,
      AppFooter
    }
  }
</script>
