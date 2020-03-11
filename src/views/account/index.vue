<template>
    <el-card>
         <bread-crumb slot='header'>
          <template slot="title">用户信息</template>
          </bread-crumb>
          <el-form ref="myform" label-width="100px" :rules="rules" :model="FormData">
              <el-form-item label="用户名：" prop="name">
                  <el-input v-model="FormData.name" style="width:30%"></el-input>
              </el-form-item>
              <el-form-item label="简介：">
                  <el-input v-model="FormData.intro" style="width:30%"></el-input>
              </el-form-item>
              <el-form-item label="邮箱：" prop="email">
                  <el-input v-model="FormData.email" style="width:30%"></el-input>
              </el-form-item>
              <el-form-item label="手机号：">
                  <el-input v-model="FormData.mobile" disabled="" style="width:30%"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button @click="saveinfo" type="primary">保存</el-button>
              </el-form-item>
              <el-image class="headerupload"
                 style="width: 200px; height: 200px"
                :src="FormData.photo"></el-image>
                <el-upload action="" :http-request="uploadImg"  :show-file-list="false">
                <el-image class="headerupload"
                 style="width: 200px; height: 200px"
                :src="FormData.photo"></el-image>
                </el-upload>
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
      },
      rules: {
        name: [{ required: true, message: '用户名不能为空', trigger: 'blur' },
          { min: 1, max: 7, message: '用户名长度为1-7', trigger: 'blur' }],
        email: [{ required: true, message: '用户名不能为空', trigger: 'blur' },
          { pattern: /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/, message: '邮箱格式不正确', trigger: 'blur' }]
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
    },
    saveinfo () {
      this.$refs.myform.validate().then(() => {
        this.$axios({
          url: 'user/profile',
          method: 'patch',
          data: this.FormData
        }).then(res => {
          this.$message.success('修改个人信息成功')
          this.getUserProfile()
        }).catch(() => {
          this.$message.error('修改失败')
        })
      })
    },
    uploadImg (params) {
      const data = new FormData()
      data.append('photo', params.file)
      this.$axios({
        url: '/user/photo',
        method: 'PATCH',
        data
      }).then(res => {
        this.getUserProfile()
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
