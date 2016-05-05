<template>
  <nav>
    <nav class="white header" role="navigation">
      <div class="nav-wrapper container">
        <a id="logo-container" href="#" class="brand-logo">Logo</a>
        <ul class="right hide-on-med-and-down">
          <li><a href="#">Navbar Link</a></li>
        </ul>

        <ul id="nav-mobile" class="side-nav" style="transform: translateX(-100%);">
          <li><a href="#">Navbar Link</a></li>
        </ul>
        <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
      </div>
    </nav>
  </nav>
</template>

<script>
  export default{
    data(){
      return {
        msg: 'hello header'
      }
    }
  }
</script>

<style>
  nav .brand-logo {
    color: #444;
  }

  .button-collapse {
    color: #26A69A;
  }
</style>
