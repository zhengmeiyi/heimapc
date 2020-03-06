<template>
  <div>
      <el-card>
          <bread-crumb slot='header'>
          <template slot="title">素材管理</template>
          </bread-crumb>
      </el-card>
      <el-row type="flex" style="margin:30px">
        <el-tabs type="card" v-model="activeName" @tab-click="changtab">
          <el-tab-pane label="全部素材" name="all">
              <div class="imglist">
                <el-card v-for="item in list" :key="item.id" class="imgcard">
                  <img :src="item.url" alt="" class="images">
                  <el-row class="operate" type="flex" align="middle" justify="space-around">
                        <i class='el-icon-star-on'></i>
                        <i class='el-icon-delete-solid'></i>
                  </el-row>

              </el-card>
              </div>

          </el-tab-pane>
          <el-tab-pane label="收藏素材" name="collect">
              <div class="imglist">
                <el-card v-for="item in list" :key="item.id" class="imgcard">
                  <img :src="item.url" alt="" class="images">
                  <el-row class="operate" type="flex" align="middle" justify="space-around">
                        <i class='el-icon-star-on'></i>
                        <i class='el-icon-delete-solid'></i>
                  </el-row>

              </el-card>
              </div>
          </el-tab-pane>
        </el-tabs>
      </el-row>

  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all',
      list: []
    }
  },
  methods: {
    changtab () {
      this.getimages()
    },
    getimages () {
      this.$axios({
        url: '/user/images',
        collect: this.activeName === 'collect'

      }).then((res) => {
        console.log(res)
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
        width:100%;
        height:100%;
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
