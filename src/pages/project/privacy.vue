<template>
   <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 left-sidebar">
          <ul>
            <li><a href="settings.html">Settings</a></li>
            <li><a href="privacy.html" class="active">Privacy</a></li>
            <li><a href="index.html">Logout</a></li>
          </ul>
        </div>
        <div class="col-sm-6">
          <table style="width:100%" class="table table-striped">
            <tr>
              <td><strong>Who can see my stuff?</strong></td>
              <td>Who can see your future posts?</td>
              <td>
                <input type="radio" name="option1" value="Public">Public <br />
                <hr>
                <input type="radio" name="option1" value="Only Me">Only-Me <br />
                <hr>
                <input type="radio" name="option1" value="Friends">Friends of Friends <br />
                <hr>
                <input type="radio" name="option1" value="Protected">Protected <br />
                <hr>
              </td>
            </tr>
            <tr>
              <td><strong>Who can contact me?</strong></td>
              <td>Who can send you friend requests?</td>
              <td>
                <input type="radio" name="option2" value="Public">Public <br />
                <hr>
                <input type="radio" name="option2" value="Only Me">Only-Me <br />
                <hr>
                <input type="radio" name="option2" value="Friends">Friends of Friends <br />
                <hr>
                <input type="radio" name="option2" value="Protected">Protected <br />
                <hr>
              </td>
            </tr>
            <tr>
              <td><strong>Who can look me up?</strong></td>
              <td>Who can look you up using the email address you provided?</td>
              <td>
                <input type="radio" name="option3" value="Public">Public <br />
                <hr>
                <input type="radio" name="option3" value="Only Me">Only-Me <br />
                <hr>
                <input type="radio" name="option3" value="Friends">Friends of Friends <br />
                <hr>
                <input type="radio" name="option3" value="Protected">Protected <br />
                <hr>
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
  name: "Privacy"
}
</script>

<style>

</style>