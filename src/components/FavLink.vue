<template>
  <a class="waves-effect waves-light btn" href="{{ link.url }}" target="_blank">
    <i class="material-icons left">bookmark</i>{{ link.name }}
  </a>
</template>

<script>
  export default{
    props: ['link']
  }
</script>

<style>

</style>
