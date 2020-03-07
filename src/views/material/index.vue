<template>
  <div>
      <el-card>
          <bread-crumb slot='header'>
          <template slot="title">素材管理</template>
          </bread-crumb>

           <el-row type="flex" justify="end">
          <el-upload action="" :show-file-list="false" :http-request="uploadImg"><el-button  size="small" type='primary'>上传图片</el-button></el-upload>
      </el-row>
      <el-row type="flex" style="margin:30px">
        <el-tabs type="card" v-model="activeName" @tab-click="changtab">
          <el-tab-pane label="全部素材" name="all">
              <div class="imglist">
               <el-card v-for="(item,index) in list" :key="item.id" class="imgcard">
                  <img :src="item.url" alt="" class="images" @click='seleimg(index)'>
                  <el-row class="operate" type="flex" align="middle" justify="space-around">
                        <i @click="collectOrCancel(item)" :style="{color:item.is_collected?'red':'black'}" class='el-icon-star-on'></i>
                        <i @click="delImage(item)" class='el-icon-delete-solid'></i>
                  </el-row>

              </el-card>
              </div>

          </el-tab-pane>
          <el-tab-pane label="收藏素材" name="collect">
              <div class="imglist">
                <el-card v-for="(item,index) in list" :key="item.id" class="imgcard">
                  <img :src="item.url" alt="" class="images" @click='seleimg(index)'>
                  <el-row class="operate" type="flex" align="middle" justify="space-around">
                        <i @click="collectOrCancel(item)" :style="{color:item.is_collected?'red':'black'}" class='el-icon-star-on'></i>
                        <i @click="delImage(item)" class='el-icon-delete-solid'></i>
                  </el-row>

              </el-card>
              </div>
          </el-tab-pane>
        </el-tabs>
</el-row>
    <el-row type="flex" style="height:80px" justify="center" align="middle">
     <el-pagination @current-change="changepage" :page-size="pages.pageSize" :current-page="pages.currentPage" :total="pages.total" background layout="prev, pager, next" >
      </el-pagination>
      </el-row>
      <!-- ----------------走马灯组件 -->
      <el-dialog @opened="openEnd" :visible="dialog" @close='dialog=false'>
          <el-carousel ref="myCarousel" indicator-position="outside" height="350px">
            <el-carousel-item v-for="item in list" :key="item">
             <img style="width:100%;height:100%" :src="item.url" alt="" class="images">
          </el-carousel-item>
           </el-carousel>
      </el-dialog>
      </el-card>

  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all',
      list: [],
      pages: {
        pageSize: 8, // 每页显示条数
        currentPage: 1, // 当前页码
        total: 0 // 总条数
      },
      dialog: false,
      clickindex: -1
    }
  },
  methods: {
    // 把图片索引给走马灯
    openEnd () {
      this.$refs.myCarousel.setActiveItem(this.clickindex)
    },
    // 获取点击图片索引
    seleimg (index) {
      this.clickindex = index
      this.dialog = true
    },
    // 删除素材
    delImage (row) {
      this.$confirm('您确定要删除吗？').then(() => {
        this.$axios({
          url: `/user/images/${row.id}`,
          method: 'delete'
        }).then((res) => {
          this.getimages()
        }).catch(() => {
          this.$message.error('删除失败')
        })
      })
    },
    // 取消或收藏素材
    collectOrCancel (row) {
      this.$axios({
        url: `/user/images/${row.id}`,
        method: 'put',
        data: {
          collect: !row.is_collected
        }
      }).then((res) => {
        this.getimages()
      }).catch(() => {
        this.$message.error('收藏失败')
      })
    },
    // 上传图片
    uploadImg (params) {
      console.log(params)
      const fd = new FormData()
      fd.append('image', params.file)
      this.$axios({
        url: '/user/images',
        data: fd,
        method: 'post'
      }).then((res) => {
        this.getimages()
      }).catch(() => {
        this.$message.error('上传失败')
      })
    },
    // 当前页码改变触发的事件
    changepage (newpage) {
      this.pages.currentPage = newpage
      this.getimages()
    },
    changtab () {
      this.pages.currentPage = 1
      this.getimages()
    },
    getimages () {
      this.$axios({
        url: '/user/images',
        params: {
          collect: this.activeName === 'collect',
          //   page: this.currentPage,
          page: this.pages.currentPage,
          per_page: this.pages.pageSize
        }

      }).then((res) => {
        console.log(res)
        this.pages.total = res.data.total_count
        this.list = res.data.results
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  created () {
    this.getimages()
  }
}

</script>

<style lang="less" scoped>
.imglist {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .imgcard {
        margin: 7px;
        width: 220px;
        height: 240px;
    .images {
        width:150px;
        height:150px;
    }
    .operate {
        height: 30px;
        background: #f4f5f6;
        i {
            font-size:20px;
        }
    }

}
}

</style>
