<template>
  <div class="header">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-4">
            <div class="logo">
              <h1>站点名称</h1>
            </div>
          </div>
          <div class="col-sm-8">
            <ul class="header-menu pull-right">
              <li>
                <router-link active-class="list-group-item active" to="./">Dashboard</router-link>
              </li>
              <li>
                <router-link active-class="list-group-item active" to="./request">request</router-link>
                </li>
              <li>
                <router-link active-class="list-group-item active" to="./message">message</router-link>
                </li>
              <li>
                <router-link active-class="list-group-item active" to="./notifications">notifications</router-link>
              </li>
              <li>
                <router-link active-class="list-group-item active" to="./chat">chat</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style>

</style>