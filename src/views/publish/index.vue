<template>
 <el-card>
   <bread-crumb slot="header">
    <template slot="title">发布文章</template>
   </bread-crumb>
   <el-form style="margin-left:50px">
     <el-form-item label="标题：">
       <el-input style="width:500px" placeholder="请输入您的标题"></el-input>
     </el-form-item>
     <el-form-item label="内容：">
       <el-input type="textarea" rows="12" style="width:60%" placeholder="请输入您的内容" ></el-input>
     </el-form-item>
      <el-form-item label="封面：">
       <el-radio-group>
         <el-radio label="">单图</el-radio>
         <el-radio label="">三图</el-radio>
         <el-radio label="">无图</el-radio>
         <el-radio label="">自动</el-radio>
       </el-radio-group>
     </el-form-item>
     <el-form-item label="频道：" v-model="channels">
       <el-select placeholder="请选择频道" value="" >
         <!-- v-for="item in channels" :key="item" -->
         <el-option v-for="item in channels" :key="item.id" :value="item.id" :label="item.name"></el-option>
       </el-select>
     </el-form-item>
     <el-form-item style="margin-left:60px">
       <el-button type="success" round>发布文章</el-button>
       <el-button type="info" round>存入草稿</el-button>
     </el-form-item>
   </el-form>
 </el-card>
</template>

<script>
export default {
  data () {
    return {
      channels: []
    }
  },
  methods: {
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then(res => {
        console.log(res)
        this.channels = res.data.channels
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
