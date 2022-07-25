<template>
  <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 left-sidebar">
          <ul>
            <li>
              <a href="./settings.html" class="active">Settings</a>
              </li>
            <li><a href="./privacy.html">Privacy</a></li>
            <li><a href="./index.html">Logout</a></li>
          </ul>
        </div>
        <div class="col-sm-6">
          <table style="width:100%" class="table table-striped">
            <tr>
              <td><strong>Name</strong></td>
              <td><input id="name" type="text"></td>
            </tr>
            <tr>
              <td><strong>Username</strong></td>
              <td><input id="username" type="text"></td>
            </tr>
            <tr>
              <td><strong>Contact</strong></td>
              <td><input id="contact" type="text"></td>
            </tr>
            <tr>
              <td><strong>Birthday</strong></td>
              <td><input id="Birthday" type="text"></td>
            </tr>
            <tr>
              <td><strong>Change Passwords</strong></td>
              <td><input id="Change Passwords" type="text"></td>
              <td>
              </td>
            </tr>
            <tr>
              <td><strong>Nick Name</strong></td>
              <td>
                <input id="nicname" type="text">
              </td>
            </tr>
          </table>
        </div>
        <div class="col-sm-3 chat-users">
          <div class="row">
            <h3>Chat</h3>
          </div>
          <div class="row">
            <div class="col-sm-12 chat-user online">
              <a href="profile5shubham.html">
                <img src="assets/imgs/1.jpg" class="pull-left" />
                &nbsp;
                Shubham Kumar
              </a>
            </div>
            <div class="col-sm-12 chat-user online">
              <a href="profile1maninder.html">
                <img src="assets/imgs/2.jpg" class="pull-left" />
                &nbsp;
                Maninder Kaur
              </a>
            </div>
            <div class="col-sm-12 chat-user online">
              <a href="profile2divyanshu.html">
                <img src="assets/imgs/3.jpg" class="pull-left" />
                &nbsp;
                Divyanshu Gupta
              </a>
            </div>
            <div class="col-sm-12 chat-user online">
              <a href="profile4akshima.html">
                <img src="assets/imgs/4.jpg" class="pull-left" />
                &nbsp;
                Akshima Sharma
              </a>
            </div>
            <div class="col-sm-12 chat-user online">
              <a href="profile3sourabh.html">
                <img src="assets/imgs/5.jpg" class="pull-left" />
                &nbsp;
                Sourabh Thakur
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Settings"
}
</script>

<style>

</style>