<template>
   <div>
    <h1>this is {{data.name}} {{data.time}} !</h1>
   </div>
</template>

<script>
export default {
  name: 'About',
  data(){
    return {
      data:{
        name: '',
        time: '',
        age: ''
      }
    }
  },
  mounted() {
    this.$nextTick(function () {
      console.log('1111')
      this.init()
    })
  },
  methods: {
    init() {
      this.name = this.$route.query.name
      this.id = this.$route.query.id
      this.getData()
    },
    getData() {
      this.$http.get('http://localhost:8080/api/demo/name', {params:{name:'1234'}} )
      .then(function(response){
        console.log(response)
        this.data = response.body
      }, function(response){
        this.$message('数据加载失败',response)
        console.log(response)
      });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }

  }
}
</script>
