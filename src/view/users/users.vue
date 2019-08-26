<template>
  <div class="users">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: 'home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索框＋添加 -->
    <div style="margin-top: 15px;">
      <el-input
        placeholder="请输入内容"
        v-model="searchInfo"
        class="input-with-select"
        style="width:350px; margin-right=30px"
      >
        <el-button slot="append" icon="el-icon-search"></el-button>
        <!-- <el-button type="success">成功按钮</el-button> -->
      </el-input>
      <el-button type="danger" round style="margin-left=20px">添加</el-button>
    </div>
    <!-- 表格 -->
    <el-table border :data="userList" style="width: 100%">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="username" label="姓名" width="150"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="150"></el-table-column>
      <el-table-column prop="mobile" label="电话"></el-table-column>
      <el-table-column label="用户状态">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-tooltip content="编辑" effect="light" placement="top">
            <el-button type="success" icon="el-icon-outline"></el-button>
          </el-tooltip>

          <el-tooltip content="分配角色" effect="light" placement="top">
            <el-button type="info" icon="el-icon-success"></el-button>
          </el-tooltip>

          <el-tooltip content="删除" effect="light" placement="top">
            <el-button type="danger" icon="el-icon-delete"></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="userobj.pagenum"
        :page-sizes="[1, 2, 3, 4, 5, 6]"
        :page-size="userobj.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
// 引入
import { getAllusers } from '@/api/users_index.js'
export default {
  data () {
    return {
      searchInfo: '',
      status: true,
      userList: [],
      userobj: {
        query: '',
        pagenum: 1,
        pagesize: 2
      },
      total: 0
    }
  },
  methods: {
    //   当切换size下了列表触发时
    handleSizeChange (val) {
      this.userobj.pagesize = val
      this.init()
    },
    // 当切换当前页码时触发
    handleCurrentChange (val) {
      this.userobj.pagenum = val
      this.init()
    },
    // 封装函数
    init () {
      getAllusers(this.userobj)
        .then(res => {
          console.log(res)
          if (res.data.meta.status === 200) {
            this.userList = res.data.data.users
            this.total = res.data.data.total
          } else if (res.data.meta.status === 400) {
            this.$message.error(res.data.meta.msg)
            this.$router.push({ name: 'login' })
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style>
</style>
