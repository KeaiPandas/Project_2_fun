<template>
  <header>
    <div class="head-container">
      <div class="left-box">
        <el-button
          @click="handleMenu"
          plain
          icon="el-icon-menu"
          size="mini"
        ></el-button>
        <!-- <h3 style="padding-left:14px; color: #fff">首页</h3> -->
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{ item.label }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="r-content">
        <el-dropdown trigger="click" size="mini">
          <span>
            <img class="user" :src="userImg" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>

<script>
import  {mapState } from 'vuex'
export default {
  name: "CommonHeader",
  data() {
    return {
      userImg: require("../assets/logo.png"),
    };
  },
  methods: {
    handleMenu() {
      this.$store.commit("collapseMenu");
    },
  },
  computed: {
    ...mapState({
      tags: state => state.tab.tabList
    })
  }
};
</script>


<style lang="less" scoped>
.head-container {
  display: flex;
  justify-content: space-around;

  .left-box {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  .r-content {
    display: flex;
    align-items: center;
    .user {
      height: 28px;
      width: 28px;
    }
  }
}
</style>