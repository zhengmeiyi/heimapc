<template>
 <el-card>
   <bread-crumb slot="header">
    <template slot="title">发布文章</template>
   </bread-crumb>
   <el-form ref="myForm" style="margin-left:50px" :rules="publishRules" :model="publishForm">
     <el-form-item label="标题：" prop="title">
       <el-input  v-model="publishForm.title" style="width:500px" placeholder="请输入您的标题"></el-input>
     </el-form-item>
     <el-form-item label="内容：" prop="content">
       <el-input  v-model="publishForm.content" type="textarea" rows="12" style="width:60%" placeholder="请输入您的内容" ></el-input>
     </el-form-item>
      <el-form-item label="封面：" prop="cover">
       <el-radio-group v-model="publishForm.cover.type">
         <el-radio :label="1">单图</el-radio>
         <el-radio :label="3">三图</el-radio>
         <el-radio :label="0">无图</el-radio>
         <el-radio :label="-1">自动</el-radio>
       </el-radio-group>
     </el-form-item >
     <el-form-item prop="channel_id" label="频道：" v-model="channels">
       <el-select v-model="publishForm.channel_id" placeholder="请选择频道" value="" >
         <!-- v-for="item in channels" :key="item" -->
         <el-option v-for="item in channels" :key="item.id" :value="item.id" :label="item.name"></el-option>
       </el-select>
     </el-form-item>
     <el-form-item style="margin-left:60px">
       <el-button @click="publish(false)" type="success" round>发布文章</el-button>
       <el-button @click="publish(true)" type="info" round>存入草稿</el-button>
     </el-form-item>
   </el-form>
 </el-card>
</template>

<script>
export default {
  data () {
    return {
      channels: [],
      publishForm: {
        title: '',
        content: '',
        cover: {
          type: 0, // -1 是自动 0是无图  1 是单图 3 是三图
          images: []
        },
        channel_id: null
      },
      publishRules: {
        title: [{ required: true, message: '文章标题不能为空', trigger: 'blur' },
          { min: 5, max: 30, message: '文章标题应在5-30之间', trigger: 'blur' }],
        content: [{ required: true, message: '文章内容不能为空', trigger: 'blur' }],
        channel_id: [{ required: true, message: '文章频道不能为空', trigger: 'blur' }]
      }
    }
  },
  methods: {
    getChannels () { // 获取频道
      this.$axios({
        url: '/channels'
      }).then(res => {
        console.log(res)
        this.channels = res.data.channels
      })
    },
    publish (draft) {
      this.$refs.myForm.validate().then(() => {
        this.$axios({
          url: '/articles',
          method: 'post',
          params: {
            draft
          },
          data: this.publishForm
        }).then(res => {
          this.$message.success('发布成功')
          this.$router.push('/home/articles')
        }).catch(() => {
          this.$message.success('发布失败')
        })
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
