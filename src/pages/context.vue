<template>
  <el-main>
    <router-view></router-view>
  </el-main>
</template>

<script>
export default {
  name: 'Context',
  data(){
    return {
      name: 'content'
    }
  }
}
</script>
