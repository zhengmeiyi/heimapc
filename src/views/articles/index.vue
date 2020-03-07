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

<style>

</style>
