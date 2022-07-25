<template>
  <div class="container-fluid">
      <div class="row">
        <div class="pull-left text-center col-sm-3">
        </div>
        <div class="pull-right col-sm-6 text-center">
          <div class="login-form">
            <p class="h3">Log in to Dostibook</p>

            <form action="javascript:void(0);" href="dashboard.html" method=" post" style="max-width:400px;margin:0px auto;">
              <div class="form-group">
                <input type="text" name="username" v-model="loginForm.username" placeholder="Username" id="username" class="input-lg col-sm-12" />
              </div>
              <div class="form-group">
                <input type="password" placeholder="Password" v-model="loginForm.password" name="pwd" id="password" class="input-lg col-sm-12" />
              </div>
              <div class="form-group">
                <input type="button" value="Login" id="submit" class="btn btn-success input-lg col-sm-12" @click="login()" />
                <br />
                <br />
                <br />
                <div>
                  <p><br />Sample Login details :<br />
                    Username : admin<br />
                    Password : admin123 <br />
                  </p>
                </div><br />
                <a href="index.html">Signup for Dostibook</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>
 
<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      userToken: ''
    };
  },
 
  methods: {
    login () {
      console.log(this.$store)
      let _this = this;
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        this.$message('账号或密码不能为空')
      } else {
        this.$http.post("http://localhost:8080/api/user/login",
        _this.loginForm).then(
          function(data){
            this.$message('登录成功',data)
            console.log('success!', data)
            _this.userToken = 'Bearer ' + data.body.token
            _this.$store.commit('changeLogin',{ Authorization: _this.userToken })
            console.log(_this.$store.state.Authorization)
            _this.$router.push({
              path: '/dashboard',
            });
          },
          function(data){
            this.$message('登录失败',data)
          },
          )
      }
    }
  }
};
</script>
<style scoped>
.login-form{
background: rgba(255,255,255,1);
padding: 10% 20px;
border-radius: 2px;
box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.4);
}
.main{
min-height:100vh;
padding:10% 0px;
}
</style>