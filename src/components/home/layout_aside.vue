<template>
  <div class="bj">
    <div class="title">
      <img src="../../assets/img/logo_admin.png" alt="">
    </div>
    <el-menu class="menu" background-color='#2a393c' text-color="#abc7d4">
        <!-- ---------------------- 1-->
        <el-menu-item>
            <i class="el-icon-s-home"></i>
             <span>首页</span>
        </el-menu-item>
        <!-- ---------------------- 2-->
        <el-submenu>
          <template slot="title">
          <i class="el-icon-s-grid"></i> 内容管理
          </template>
         <el-menu-item>发布文章</el-menu-item>
         <el-menu-item>内容列表</el-menu-item>
         <el-menu-item>评论列表</el-menu-item>
         <el-menu-item>素材管理</el-menu-item>
        </el-submenu>
        <!-- ---------------------- 3-->
        <el-submenu>
           <template slot="title">
          <i class="el-icon-star-on"></i> 粉丝管理
          </template>
          <el-menu-item>图文数据</el-menu-item>
          <el-menu-item>粉丝概况</el-menu-item>
          <el-menu-item>粉丝画像</el-menu-item>
          <el-menu-item>粉丝列表</el-menu-item>
        </el-submenu>
        <!-- ----------------------4-->
        <el-menu-item>
            <i class="el-icon-s-custom"></i>
            <span>账户信息</span>
        </el-menu-item>
    </el-menu>

  </div>
</template>

<script>
export default {

}
</script>

<style lang = 'less' scope>
.bj {
  background-color: #445c60;
  height: 100vh;
  width: 230px;
  .title {
    height: 35px;
    text-align: center;
    padding:5px 0;
    margin-bottom: 15px;
  }
  .menu {
    border-right: none;
  }

}
</style>
