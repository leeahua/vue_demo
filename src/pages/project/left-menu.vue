<template>
  <div class="col-sm-3 left-sidebar">
      <ul>
        <li>
          <router-link active-class="list-group-item active" to="./newsfeeds">newsfeeds</router-link>
          </li>
        <li>
          <router-link active-class="list-group-item active" to="./settings">Settings</router-link>
          </li>
        <li>
          <router-link active-class="list-group-item active" to="./login">login</router-link>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'LeftSide'
}
</script>

<style>

</style>