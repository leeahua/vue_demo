<template>
  <div>
    <h1>这里是{{name}} -- {{msg}} -- {{id}}</h1>
  </div>
</template>

<script>
export default {
  name: 'About',
  data(){
    return {
      name: '----',
      id: '',
      msg: ''
    }
  }, 
  beforeCreate: function() {
    console.log("beforeCreate => 无数据 无dom")
    console.log('name-->',this.name)
  },
  created: function(){
    console.log("created => 能获取数据，获取不到元素，更改数据不会触发updated")
    console.log('name-->',this.name)
    this.name = this.$route.params.name
    this.id = this.$route.params.id
    console.log('name-->',this.name)
  },
  beforeMount: function(){
    console.log("beforeMount => 能获取数据，获取不到元素，更改数据不会触发updated")
    console.log('name-->',this.name)
  },
  mounted: function(){
    console.log("mounted => 能获取数据, 可以获取dom元素，更改数据会触发updated")
    console.log('name-->',this.name)
  },
  beforeUpdate: function(){
    console.log("beforeUpdate => 数据变更前")
  },
  updated: function() {
    console.log("updated => 数据变更后")
  },
  beforeDestroy: function(){
    console.log("beforeDestroy ")
  },
  destroyed: function() {
    console.log("destroyed ")
  },
  methods: {
    init() {
      console.log('init')
      this.name = this.$route.params.name
      this.id = this.$route.params.id
    }
  }
}
</script>
