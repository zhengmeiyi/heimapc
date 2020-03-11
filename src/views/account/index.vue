<template>
    <el-card>
         <bread-crumb slot='header'>
          <template slot="title">用户信息</template>
          </bread-crumb>
          <el-form label-width="100px">
              <el-form-item label="用户名：">
                  <el-input v-model="FormData.name" style="width:30%"></el-input>
              </el-form-item>
              <el-form-item label="简介：">
                  <el-input v-model="FormData.intro" style="width:30%"></el-input>
              </el-form-item>
              <el-form-item label="邮箱：">
                  <el-input v-model="FormData.email" style="width:30%"></el-input>
              </el-form-item>
              <el-form-item label="手机号：">
                  <el-input v-model="FormData.mobile" disabled="" style="width:30%"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary">保存</el-button>
              </el-form-item>
              <el-image class="headerupload"
                 style="width: 200px; height: 200px"
                :src="FormData.photo"></el-image>
          </el-form>
    </el-card>
</template>

<script>
export default {
  data () {
    return {
      FormData: {
        name: '',
        intro: '', // 简介
        email: '', // 邮箱
        mobile: '',
        photo: ''
      }
    }
  },
  methods: {
    getUserProfile () {
      this.$axios({
        url: '/user/profile'
      }).then(res => {
        console.log(res)
        this.FormData = res.data
      })
    }
  },
  created () {
    this.getUserProfile()
  }
}
</script>

<style scoped>
.headerupload{
    position: absolute;
    right: 360px;
    top:150px;
    border-radius: 50%;
}
</style>
