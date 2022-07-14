<template>
  <div>
    <el-container>
      <el-header>
        <Banner></Banner>
      </el-header>
      <el-container>
        <el-aside width="200px"><Left></Left></el-aside>
        <el-container>
          <el-main>
            <router-link active-class="list-group-item active" to="./context">Go to Home</router-link>
            <router-link active-class="list-group-item active" to="./about">Go to About</router-link>
            <router-view></router-view>
          </el-main>
          <el-footer>
            <Footer></Footer>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Left from './pages/left.vue'
import Banner from './pages/banner.vue'
import Footer from './pages/footer.vue'
export default {
  name: 'App',
  components: {
    Left,Banner,Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
