<template>
  <div class="big">
    <div class="bg"></div>
      <el-card class="login-card">
        <div class="title">
          <img  src="../../assets/img/logo_index.png" alt="">
        </div>
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
          <el-form-item prop='mobile'>
            <el-input v-model="loginForm.mobile" style="margin-top:10px" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item prop='code'>
            <el-input v-model="loginForm.code" style="width:60%" placeholder="请输入验证码"></el-input><el-button plain style="width:35%;float:right">发送验证码</el-button>
          </el-form-item>
          <el-form-item prop='checked'>
            <el-checkbox  v-model="loginForm.checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button @click='login' type="primary" style="width:100%">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '',
        code: '',
        checked: false
      },
      loginRules: {
        mobile: [{
          required: true,
          message: '您的手机号不能为空'
        }, {
          pattern: /^1[3-9]\d{9}$/, // 手机号格式正则
          message: '您的手机号格式不正确'
        }],
        code: [{
          required: true,
          message: '您的验证码不能为空'
        }, {
          pattern: /\d{6}$/,
          message: '请输入6位数字的验证码'
        }],
        checked: [{
          validator: function (rule, value, callback) {
            value ? callback() : callback(new Error('您必须同意我们的协议')
            )
          }
        }]
      }
    }
  },
  methods: {
    login () {
      // 手动验证

      this.$refs.loginForm.validate().then(() => {
        // 求接口
        this.$axios({
          url: '/authorizations',
          data: this.loginForm,
          method: 'post'

        }).then(res => {
          // 成功后获取token
          window.localStorage.setItem('user_token', res.data.data.token)
          // 跳转到主页
          this.$router.push('/home')
        }).catch((error) => {
          console.log(error)

          this.$message({
            message: '您的手机号或验证码不正确',
            type: 'warning'
          })
        })
      })
    }
  }
}
</script>

<style lang="less">
.big {
  height: 100vh;
  display: flex;
  // justify-content: center;
  // margin-left: 70%;
  align-items: center;
  .bg {
    position: absolute;
    background-image: url('../../assets/img/bj.jpg');
    filter: blur(2px);
    background-size: contain;
    height: 100%;
    width: 100%;

  }
  .login-card {
    margin-left: 60%;
    background: rgba(0,0,0,0.4);
    z-index: 1;
    height: 320px;
    width: 350px;
    .title{
      text-align: center;
      img {
        height: 45px;
      }
    }

  }
}

</style>
