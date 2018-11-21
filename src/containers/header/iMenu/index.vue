<template>
  <section class="i-menu">
    <el-menu :default-active="activeIndex" class="el-menu-no-bottom-border" mode="horizontal" @select="handleSelect">
      <el-menu-item index="/events">事件</el-menu-item>
      <el-menu-item index="/plan">计划</el-menu-item>
      <el-menu-item index="/setting">设置</el-menu-item>
    </el-menu>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '/events'
    };
  },
  computed:{
    // activeIndex: 
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push(key)
    }
  },
  created(){
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