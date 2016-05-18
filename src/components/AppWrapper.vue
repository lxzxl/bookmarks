<template>
  <app-header></app-header>
  <app-body></app-body>
  <app-footer></app-footer>
  <modal-fav-link></modal-fav-link>
  <confirm></confirm>
</template>

<script type="text/babel">
  import AppHeader from './AppHeader';
  import AppBody from './AppBody';
  import AppFooter from './AppFooter';
  import ModalFavLink from './ModalFavLink';
  import Confirm from './Confirm';


  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    components: {
      AppHeader,
      AppBody,
      AppFooter,
      ModalFavLink,
      Confirm
    }
  }
</script>
