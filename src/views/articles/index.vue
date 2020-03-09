<template>
  <div>
       <el-card>
          <bread-crumb slot='header'>
          <template slot="title">文章列表</template>
          </bread-crumb>
          <el-form>
              <el-form-item label="文章状态：">
                  <!-- 文章状态，0-草稿，1-待审核，2-审核通过，3-审核失败，4-已删除，不传为全部 -->
                  <el-radio-group v-model="searchForm.status">
                  <el-radio label="5">全部</el-radio>
                  <el-radio label="0">草稿</el-radio>
                  <el-radio label="1">待审核</el-radio>
                  <el-radio label="2">审核通过</el-radio>
                  <el-radio label="3">审核失败</el-radio>
                  </el-radio-group>
              </el-form-item>
              <el-form-item label="频道类型：">
                  <el-select placeholder="请选择频道">
                      <el-option v-for="item in chanelList" :key="item.id" :label="item.name" :value="item.id" ></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="日期范围：">
                  <el-date-picker type='daterange' v-model="searchForm.dateRange">
                    </el-date-picker>
              </el-form-item>
          </el-form>
          <div class="p">
            <p>共找到1000条符合条件的内容</p>
          </div>
          <div class="newslist">
            <div class="left">
              <div class="cover">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583743409233&di=b511298fd46d784374d5efae1d81b7f8&imgtype=0&src=http%3A%2F%2Fi-1.shouji56.com%2F2014%2F8%2F28%2Fdd41b9e1-fd62-4f93-b20f-48d476777b45.jpg" alt="">
              </div>
              <div class="info">
               <p>11111111111</p>
               <el-tag type="success" style="width:60px">已发表</el-tag>
               <p class="data">2020-03-09 13:40:22</p>
              </div>
            </div>

            <div class="right">
              <i class="el-icon-edit"> 修改</i>
              <i class="el-icon-delete"> 删除</i>
            </div>
          </div>
      </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchForm: {
        status: 5,
        channel_id: null,
        dateRange: []
      },
      chanelList: []
    }
  },
  methods: {
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then((res) => {
        this.chanelList = res.data.channels
      })
    }
  },
  created () {
    this.getChannels()
  }
}
</script>

<style lang="less" scoped>
.p{
  height: 35px;
  border-bottom: 1px dashed #ccc;
}
.newslist {
  height: 150px;
  border-bottom: 1px solid #ccc;
  .left {
    .cover {
      height: 120px;
      width: 180px;
      margin: 15px 10px;
      float: left;
      img {
        height: 100%;
        width: 100%;
        border-radius: 4px;
      }
    }
    .info {
      height: 120px;
      margin: 15px 0px;
      float: left;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .data{
        font-size: 12px;
        color: #999;
      }
    }
  }
  .right {
    float: right;
    i {
      font-size: 12px;
      margin-top:30px;
      margin-right:10px;
      cursor: pointer;
      user-select: none;
    }
  }
}
</style>
