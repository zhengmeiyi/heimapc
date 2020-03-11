<template>
    <div class="cover-img">
        <div class="cover-one" v-for="(item,index) in list" :key="index">
            <img :src="item?item:defImg" alt="" @click="changedialog(index)">
        </div>
        <el-dialog :visible.sync="dialogVisible"  @close="dialogVisible=false" width="860px">
            <select-image @selectOneImg="reseiveImg"></select-image>
        </el-dialog>
    </div>
</template>

<script>
export default {
  props: ['list'],
  data () {
    return {
      defImg: require('../../assets/img/pic_bg.png'),
      dialogVisible: false,
      selectIndex: -1
    }
  },
  methods: {
    changedialog (index) {
      this.dialogVisible = true
      this.selectIndex = index
    },
    reseiveImg (url) {
      this.$emit('selectTwoImg', url, this.selectIndex)
      this.dialogVisible = false
    }
  }

}
</script>

<style lang="less" scoped>
.cover-img{
    margin: 20px 80px;
    display: flex;
    .cover-one{
        border: 1px solid #ccc;
        width: 200px;
        height: 200px;

        img{
            width:180px;
            height:180px;
            text-align:center;
        }
    }
}

</style>
