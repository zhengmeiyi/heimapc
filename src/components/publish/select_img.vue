<template>
  <div>
<el-tabs type="border-card" class="border-card">
    <el-tab-pane label="素材库" class="selsctcard">
        <el-card v-for="item in list" :key="item.id" class="card">
            <img :src="item.url" alt="" class="coverimg" @click="clickImg(item.url)">
        </el-card>
        <el-pagination class="pagsize" background @current-change="changpage" layout="prev,pager,next" :current-page="page.currentpage" :page-size="page.pagesize" :total="page.totle"></el-pagination>
    </el-tab-pane>
    <el-tab-pane label="上传素材">上传素材</el-tab-pane>

</el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      page: {
        currentpage: 1,
        pagesize: 9,
        totle: 100
      }
    }
  },
  methods: {
    getAllimg () {
      this.$axios({
        url: '/user/images',
        params: {
          collect: false,
          page: this.page.currentpage,
          per_page: this.page.pagesize
        }
      }).then(res => {
        console.log(res)
        this.list = res.data.results
        this.page.totle = res.data.total_count
      })
    },
    changpage (newpage) {
      this.page.currentpage = newpage
      this.getAllimg()
    },
    clickImg (url) { // 点击图片时触发，将子组件中的图片url传给父组件
      this.$emit('selectOneImg', url)
    }
  },
  created () {
    this.getAllimg()
  }
}
</script>

<style lang="less" scoped>
.border-card{
    width: 820px;
    .selsctcard{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        .card{
            height: 200px;
            width: 200px;

             .coverimg{
            width: 100%;
             height: 100%;
             }
        }
        .pagsize{
            margin-top: 50px;
        }
    }
}

</style>
