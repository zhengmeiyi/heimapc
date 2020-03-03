<template>
  <el-carousel autoplay='true' class="abs" :interval="4000" type="card" height="200px">
    <el-carousel-item height="300" v-for="item in list" :key="item">
      <!-- <h3 class="medium">{{ item }}</h3> -->
      <img width="100%" class="medium" :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data () {
    return {
      list: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583251137541&di=be943a3af3ed23aabb3f624d3adb7819&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190508%2F18%2F1557313196-ONMlAsuohv.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583251137541&di=442570fddf15f852b1d424f42b17f8ff&imgtype=0&src=http%3A%2F%2Fimg.jk51.com%2Fimg_jk51%2F378121516.jpeg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583251137541&di=f3afd366fe7c2defed87c03b41f79766&imgtype=0&src=http%3A%2F%2Fi5.3conline.com%2Fimages%2Fpiclib%2F201003%2F12%2Fbatch%2F1%2F56471%2F1268374913148zr73v7u922.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583251252588&di=01f5e36b9fbba2aa7567a8239703d9e2&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1293670402%2C1798314168%26fm%3D214%26gp%3D0.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583251137539&di=ebda3f8554bc74393405e43bf882e3d1&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-01-12%2F5a5820b02e4f7.jpg']
    }
  }
}
</script>

<style>

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
