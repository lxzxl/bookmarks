<template>
  <!-- Modal Structure -->
  <div id="modal-fav-link" class="modal modal-fixed-footer">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>
    </div>
  </div>
</template>

<script type="text/babel">
  import HeaderComponent from './components/header.vue';
  import OtherComponent from './components/other.vue';

  export default{
    props: ['panel', 'link'],
    data(){
      return {
        msg: 'hello vue'
      }
    },
    components: {
      'other-component': OtherComponent,
      HeaderComponent,
    }
  };
</script>

<style>
  body {
    background-color: #ff0000;
  }
</style>
