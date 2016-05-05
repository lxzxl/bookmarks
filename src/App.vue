<template>
  <div id="app" class="wrapper">
    <app-header></app-header>
    <app-body>hello</app-body>
    <app-footer></app-footer>
  </div>
</template>
<script>
  import AppHeader from './components/AppHeader'
  import AppBody from './components/AppBody'
  import AppFooter from './components/AppFooter'

  export default {
    components: {
      AppHeader,
      AppBody,
      AppFooter
    }
  }
</script>

<style>
  .wrapper {

  }
</style>
