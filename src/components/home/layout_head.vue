<template>
<el-row class="layout_head" type='flex' align="middle">
  <el-col :span="12" class="left">
        <i class='el-icon-s-fold'></i>
       <span>
           江苏传智播客教育科技股份有限公司
       </span></el-col>
  <el-col :span="12" class="right">
    <el-row type="flex" justify="end" align="middle">
      <img :src="user_info.photo" alt="">
      <!-- -----------------------------------下拉菜单 -->
      <el-dropdown @command="clickMenu">
          <span>{{user_info.name}}</span>
          <el-dropdown-menu>
            <el-dropdown-item command="info">个人信息</el-dropdown-item>
            <el-dropdown-item command="git">git地址</el-dropdown-item>
            <el-dropdown-item command="lgout"> <i class="el-icon-switch-button"></i> 退出</el-dropdown-item>
          </el-dropdown-menu>
      </el-dropdown>

    </el-row>
  </el-col>
</el-row>
</template>

<script>
export default {
  data () {
    return {
      user_info: {}
    }
  },
  methods: {
    clickMenu (command) {
      if (command === 'info') {

      } else if (command === 'git') {
        window.location.href = 'https://github.com/zhengmeiyi'
      } else {
        window.localStorage.removeItem('user_token')
        this.$router.push('/login')
      }
    }
  },
  created () {
    // const token = localStorage.getItem('user_token')
    this.$axios({
      url: '/user/profile'
      // headers: {
      //   Authorization: `Bearer ${token}` // 必须有空格
      // }
    }).then(result => {
      console.log(result)
      this.user_info = result.data.data
      console.log(this.user_info)
    })
  }
}
</script>

<style lang = 'less' scoped>
.layout_head {
  height: 60px;
  background-color: #2a393c;
  color:  #abc7d4;
  .left {
    font-size: 20px;
    margin-left: 20px;
  }
  .right {
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 5px;
    }
    span {
      color:  #abc7d4;
    }
  }
}
</style>
