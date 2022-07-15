<template>
  <el-aside width="200px">
    <h1>{{name}}</h1>
    
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
