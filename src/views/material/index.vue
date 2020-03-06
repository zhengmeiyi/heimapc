<template>
  <div>
      <el-card>
          <bread-crumb slot='header'>
          <template slot="title">素材管理</template>
          </bread-crumb>
      </el-card>
      <el-row type="flex" style="margin:30px">
        <el-tabs type="card" v-model="activeName">
          <el-tab-pane label="全部素材" name="all">111111</el-tab-pane>
          <el-tab-pane label="收藏素材" name="collect">2222222</el-tab-pane>
        </el-tabs>
      </el-row>

  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all'
    }
  }
}
</script>

<style>

</style>
