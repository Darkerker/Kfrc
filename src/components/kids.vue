
<template>

<el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>个人管理</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">个人信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>打卡情况</template>
        <el-menu-item-group>
          <template slot="title">打卡</template>
          <el-menu-item index="2-2">个人打卡情况</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="请假">
          <el-menu-item index="2-3">请假以及请假记录</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>信息管理</template>
        
        <el-menu-item-group title="举报">
          <el-menu-item index="3-3">举报信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</el-container>

</template>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    name : 'Kids',
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>