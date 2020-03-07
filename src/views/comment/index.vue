<template>
  <div>
      <el-card>
          <bread-crumb slot='header'>
          <template slot="title">评论列表</template>
          </bread-crumb>

          <el-table :data="list" v-loading="loading">
        <el-table-column width="400" prop="title" label="标题"></el-table-column>
        <el-table-column :formatter="formatterBool" prop="comment_status" label="评论状态"></el-table-column>
        <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
        <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
        <el-table-column  label="操作">
            <template slot-scope="obj">
                <el-button size="small" type="text">修改</el-button>
                 <el-button @click="openOrClose(obj.row)" size="small" type="text">{{obj.row.comment_status ? '关闭' : '打开'}}</el-button>

            </template>

        </el-table-column>
    </el-table>
    <el-row type="flex" style="height:80px" justify="center" align="middle">
     <el-pagination @current-change="changepage" :page-size="pages.pageSize" :current-page="pages.currentPage" :total="pages.total" background layout="prev, pager, next" >
      </el-pagination>
    </el-row>
      </el-card>

  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      pages: {
        pageSize: 10, // 每页显示条数
        currentPage: 1, // 当前页码
        total: 0 // 总条数
      },
      loading: false
    }
  },
  methods: {
    // 当前页码改变触发的事件
    changepage (newpage) {
      this.pages.currentPage = newpage
      this.getComment()
    },
    // 获取评论
    getComment () {
      this.loading = true // 开启遮罩
      this.$axios({
        url: '/articles',
        params: {
          response_type: 'comment',
          per_page: this.pages.pageSize,
          page: this.pages.currentPage
        }
      }).then(res => {
        this.pages.total = res.data.total_count // 总条数
        this.list = res.data.results
        this.loading = false // 关闭遮罩
      })
    },
    // 过滤布尔值
    formatterBool (row, column, cellValue, index) {
      return cellValue ? '正常' : '关闭'
    },
    // 打开或关闭逻辑
    openOrClose (row) {
      const mess = row.comment_status ? '关闭' : '打开'
      this.$confirm(`是否确定${mess}评论`, '提示').then(() => {
        this.$axios({
          url: '/comments/status',
          method: 'put',
          params: {
            article_id: row.id.toString() // 大数字问题
          },
          data: {
            allow_comment: !row.comment_status
          }
        }).then(() => {
          this.$message.success(`${mess}评论成功`)
          this.getComment()
        }).catch(() => {
          this.$message.error(`${mess}评论失败`)
        })
      })
    }
  },
  created () {
    // 获取评论列表
    this.getComment()
  }

}
</script>

<style>

</style>
