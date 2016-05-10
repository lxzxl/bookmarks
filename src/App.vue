<template>
    <app-header></app-header>
    <app-body>hello</app-body>
    <app-footer></app-footer>
</template>
<script type="text/babel">
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

</style>
