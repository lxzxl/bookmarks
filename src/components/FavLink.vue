<template>
  <div class="col s4 m3 l2 link">
    <a class="waves-effect waves-light btn" href="{{ link.url }}" target="_blank">
      <i class="material-icons left">bookmark</i>{{ link.name }}
    </a>
  </div>
</template>

<script>
  export default{
    props: ['link']
  }
</script>

<style scoped>
  .link {
    height: 50px;
  }

  .btn {
    width: 100%;
    white-space: nowrap;
  }
</style>
