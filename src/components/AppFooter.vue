<template>
  <footer class="page-footer black">
    <div class="footer-copyright">
      <div class="container">
        © 2016 Copyright lxzxl
        <a class="grey-text text-lighten-4 right" href="https://github.com/lxzxl/bookmarks" target="_blank">
          <i class="material-icons icon-github-alt"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: 'Hello Footer!'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: #42b983;
  }
</style>
