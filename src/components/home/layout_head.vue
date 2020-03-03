<template>
<el-row class="layout_head" type='flex' align="middle">
  <el-col :span="12" class="left">
        <i class='el-icon-s-fold'></i>
       <span>
           江苏传智播客教育科技股份有限公司
       </span></el-col>
  <el-col :span="12" class="right">
    <el-row type="flex" justify="end" align="middle">
      <img src="../../assets/img/avatar.jpg" alt="">
      <!-- -----------------------------------下拉菜单 -->
      <el-dropdown>
          <span>时光空城</span>
          <el-dropdown-menu>
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>git地址</el-dropdown-item>
            <el-dropdown-item> <i class="el-icon-switch-button"></i> 退出</el-dropdown-item>
          </el-dropdown-menu>
      </el-dropdown>

    </el-row>
  </el-col>
</el-row>
</template>

<script>
export default {

}
</script>

<style lang = 'less' scoped>
.layout_head {
  height: 60px;
  background-color: #2a393c;
  color:  #abc7d4;
  .left {
    font-size: 20px;
    margin-left: 20px;
  }
  .right {
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 5px;
    }
    span {
      color:  #abc7d4;
    }
  }
}
</style>
