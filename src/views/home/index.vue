<template>
  <div>
  <el-container>
    <el-aside style="width:230px,">
      <layout-aside></layout-aside>
    </el-aside>
    <el-container style="padding:0">
      <el-header style="padding:0">
        <layout-head></layout-head>
      </el-header>
      <el-main style="padding:0">
        <h1>我是二级路由区</h1>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {

}

</script>
