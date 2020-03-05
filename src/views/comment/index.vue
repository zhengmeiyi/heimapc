<template>
  <div>
      <el-card>
          <bread-crumb slot='header'>
          <template slot="title">评论列表</template>
          </bread-crumb>
      </el-card>
    <el-table :data="list">
        <el-table-column width="400" prop="title" label="标题"></el-table-column>
        <el-table-column :formatter="formatterBool" prop="comment_status" label="评论状态"></el-table-column>
        <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
        <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
        <el-table-column  label="操作">
            <el-button size="small" type="text">修改</el-button>
            <el-button size="small" type="text">关闭评论</el-button>

        </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    // 获取评论
    getComment () {
      this.$axios({
        url: '/articles',
        params: {
          response_type: 'comment'
        }
      }).then(res => {
        console.log(res)
        this.list = res.data.results
      })
    },
    // 过滤布尔值
    formatterBool (row, column, cellValue, index) {
      return cellValue ? '正常' : '关闭'
    }
  },
  created () {
    this.getComment()
  }

}
</script>

<style>

</style>
