<template>
    <el-card>
         <bread-crumb slot='header'>
          <template slot="title">用户信息</template>
          </bread-crumb>
          <el-form label-width="100px">
              <el-form-item label="用户名：">
                  <el-input style="width:30%"></el-input>
              </el-form-item>
              <el-form-item label="简介：">
                  <el-input style="width:30%"></el-input>
              </el-form-item>
              <el-form-item label="邮箱：">
                  <el-input style="width:30%"></el-input>
              </el-form-item>
              <el-form-item label="手机号：">
                  <el-input disabled="" style="width:30%"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary">保存</el-button>
              </el-form-item>
              <el-image
                 style="width: 250px; height: 250px"
                :src="url"></el-image>
          </el-form>
    </el-card>
</template>

<script>
export default {

}
</script>

<style>

</style>
