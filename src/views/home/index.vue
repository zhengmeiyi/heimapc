<template>
  <div>
  <el-container>
    <el-aside>
      <layout-aside></layout-aside>
    </el-aside>
    <el-container>
      <el-header><h1>我是头部</h1></el-header>
      <el-main>
        <h1>我是二级路由区</h1>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import layoutaside from '../../components/home/layout_aside'
export default {
  components: {
    'layout-aside': layoutaside
  }
}

</script>
