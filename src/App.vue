<template>
  <div>
    <Nav></Nav>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="col-sm-12">
      &copy; Dostibook 2018.
    </div>
  </div>
</template>
<script>
// import Banner from './pages/banner'
import './assets/css/style.css'
import './assets/css/admin.css'
import Nav from './pages/project/nav.vue'
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
  .signup-form {
    background: rgba(255, 255, 255, 1);
    padding: 10px 20px;
    border-radius: 2px;
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.4);
  }
</style>
