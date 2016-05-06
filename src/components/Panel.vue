<template>
  <div class="card-panel">
    <h4>{{ panel.name }}</h4>
    <a v-for="link in panel.links" href="{{ link.url }}">{{ link.name }}</a>
  </div>
</template>

<script>
  import {updateActiveNote} from '../vuex/actions'

  export default{
    props: ['panel'],
    data(){
      return {

      }
    }
  }
</script>

<style scoped>

</style>
