<template>
  <el-aside width="200px">
    <el-col >
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>demo</span>
        </template>
        <el-menu-item-group>
          <!-- <el-menu-item :index="'/about'">about</el-menu-item>
          <el-menu-item :index="'/'">home</el-menu-item> -->
          <el-menu-item :index="'/user'">user</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item> -->
    </el-menu>
  </el-col>
    <!-- <div :v-for= "item in menu">
      <router-link active-class="router-link-active"  :to="item.path" >{{item.name}}</router-link>
      <br>
    </div>
     -->
  </el-aside>
</template>

<script>
export default {
  name: 'left',
  data(){
    return {
      name: 'left',
      menu: [
        {path: '/', title:'main'},
        {path: '/about', title:'about'},
      ]
    }
  }
}
</script>
