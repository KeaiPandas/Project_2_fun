<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <common-aside/>
    </el-aside>
    <el-container>
      <el-header>
        <common-header/>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '../src/components/CommonAside'
import CommonHeader from '../src/components/CommonHeader.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    CommonAside,
    CommonHeader
  },
  data() {
    return {

    }
  },
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: #333;
}

.el-main {
  padding-top: 0;
}
</style>