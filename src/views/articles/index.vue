<template>
  <div>
       <el-card>
          <bread-crumb slot='header'>
          <template slot="title">文章列表</template>
          </bread-crumb>
          <el-form>
              <el-form-item label="文章状态：">
                  <!-- 文章状态，0-草稿，1-待审核，2-审核通过，3-审核失败，4-已删除，不传为全部 -->
                  <el-radio-group  @change="changCondition" v-model="searchForm.status">
                  <el-radio :label="5">全部</el-radio>
                  <el-radio :label="0">草稿</el-radio>
                  <el-radio :label="1">待审核</el-radio>
                  <el-radio :label="2">审核通过</el-radio>
                  <el-radio :label="3">审核失败</el-radio>
                  </el-radio-group>
              </el-form-item>
              <el-form-item label="频道类型：">
                  <el-select @change="changCondition" placeholder="请选择频道" v-model="searchForm.channel_id" value="">
                      <el-option  v-for="item in chanelList" :key="item.id" :label="item.name" :value="item.id" ></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="日期范围：">
                  <el-date-picker @change="changCondition" value-format='yyyy-MM-dd' type='daterange' v-model="searchForm.dateRange">
                    </el-date-picker>
              </el-form-item>
          </el-form>
          <div class="p">
            <p>共找到1000条符合条件的内容</p>
          </div>
          <div class="newslist" v-for="item in newslist" :key="item.id.toString()">
            <div class="left">
              <div class="cover">
              <img :src="item.cover.images.length ? item.cover.images[0] : defaultImg" alt="">
              </div>
              <div class="info">
               <p>{{item.title}}</p>
               <!-- 两个过滤器 分别处理   显示文本 和 标签类型- -->
               <el-tag :type="item.status | changtype" style="width:60px">{{item.status | changmsg}}</el-tag>
               <p class="data">{{item.pubdate}}</p>
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
      chanelList: [],
      newslist: [],
      defaultImg: require('../../assets/img/timg.jpg')
    }
  },
  methods: {
    getChannels () { // 获取频道
      this.$axios({
        url: '/channels'
      }).then((res) => {
        this.chanelList = res.data.channels
      })
    },
    getarticles (params) { // 获取文章列表
      this.$axios({
        url: '/articles',
        params
      }).then(res => {
        // console.log(res)
        this.newslist = res.data.results
      })
    },
    changCondition () { // 搜索类别改变重新获取文章列表
      const params = {
        status: this.searchForm.status === 5 ? null : this.searchForm.status, // 文章发布类型
        channel_id: this.searchForm.channel_id, // 频道
        begin_pubdata: this.searchForm.dateRange.length === 0 ? null : this.searchForm.dateRange[0], // 起始时间
        end_pubdate: this.searchForm.dateRange.length > 1 ? this.searchForm.dateRange[1] : null // 截止时间
      }
      this.getarticles(params)
    }
  },
  created () {
    this.getChannels() // 获取频道
    this.getarticles() // 获取文章列表
  },
  filters: {
    changmsg (val) {
      switch (val) {
        case 0 : return '草稿' // 0-草稿，1-待审核，2-审核通过，
        case 1 : return '待审核'
        case 2 : return '已发表'
        case 3 : return '审核失败'
      }
    },
    changtype (val) {
      switch (val) {
        case 0 : return 'info' // 0-草稿，1-待审核，2-审核通过，
        case 1 : return 'danger'
        case 2 : return 'success'
        case 3 : return 'warning'
      }
    }
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
