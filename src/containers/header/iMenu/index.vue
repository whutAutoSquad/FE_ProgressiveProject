<template>
  <section class="i-menu">
    <el-menu :default-active="activeIndex" class="el-menu-no-bottom-border" mode="horizontal" router >
      <el-menu-item index="/event">事件</el-menu-item>
      <el-menu-item index="/plan">计划</el-menu-item>
      <el-menu-item index="/setting">设置</el-menu-item>
    </el-menu>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '/event'
    };
  },
  watch: {
    // 当引入 el-menu 的 router 属性后,以下的 watch监测 就不需要了
    // watch 方法用来监测 $route 的变化,以获取当前路由信息
    // $route: function(to, from) {
    //   console.log(" watch $route : ", to, from)
    //   this.activeIndex = this.$route.path;
    // }
  },
  methods: {
    // 当引入 el-menu 的 router 属性后,以下的 handleSelect跳转 就不需要了
    // 路由跳转处理
    // handleSelect(key, keyPath) {
    //   console.log(key, keyPath);
    //   this.$router.push(key)
    // }
  },
  mounted() {
    this.activeIndex = this.$route.matched[1].path;
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