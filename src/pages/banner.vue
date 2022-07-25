<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    > <template v-for="item in menus">
        <el-menu-item :index="item.id" :key="item.id">{{item.name}}</el-menu-item>
      </template>
    </el-menu>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      name: "test",
      msg:'',
      id:'',
      activeIndex: '1',
      menus: [
        {
          id: '1',
          name: '处理中心',
          path: '/about',
        },
        {
          id: '2',
          name: '主页',
          path: '/main',
        },
        {
          id: '3',
          name: '登录',
          path: '/login',
        },
        {
          id: '4',
          name: '注册',
          path: '/register',
        },
      ]
    }
  },
  mounted:function() {
    this.$nextTick(function () {
      console.log('1111')
      this.init()
    })
  },
  methods:{
    init() {
      // 获取菜单信息
      this.$http.get('http://localhost:8080/api/demo/name', {params:{name:'1234'}} ).then(function(response){
        console.log(response)
        this.data = response.body
      }, function(response){
        this.$message('数据加载失败',response)
        console.log(response)
      });
    },
    handleSelect(data) {
      console.log(data)
      for(let menu of this.menus){
        if(menu.id === data){
          this.$router.push({
            path: menu.path,
            query: {name:menu.name}
          })
          return
        }
      }
    }
  }
};
</script>
