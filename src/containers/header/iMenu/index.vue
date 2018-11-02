<template>
  <section class="i-menu">
    <el-menu :default-active="activeIndex" class="el-menu-no-bottom-border" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">事件记录</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">通讯录</el-menu-item>
        <el-menu-item index="2-2">地图中心</el-menu-item>
        <el-menu-item index="2-3">图片中心</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="#">帮助文档</a></el-menu-item>
    </el-menu>
  </section>
</template>

<script>
export default {
  name: 'iMenu',
  data() {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.i-menu {
  margin-top: -1px;
}
.i-menu .el-menu-no-bottom-border {
  border-width: 0px;
}
</style>