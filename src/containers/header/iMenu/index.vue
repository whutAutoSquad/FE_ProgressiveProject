<template>
  <section class="i-menu">
    <el-menu :default-active="activeRoute" class="el-menu-no-bottom-border" mode="horizontal" router>
      <template v-for="item in routes">
        <el-menu-item :index="item.path">{{item.name}}</el-menu-item>
      </template>
    </el-menu>
  </section>
</template>
<script>
// 引入 vuex
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('routes')

export default {
  name: 'i-menu',
  computed: {
    ...mapState({
      routes: state => state.routes[0].children,
      activeRoute: state => state.activeRoute
    })
  },
  methods: {
    ...mapActions([
      'setActiveRoute'
    ])
  },
  data() {
    return {};
  },
  // watch: {
    // 当引入 el-menu 的 router 属性后,以下的 watch监测 就不需要了
    // watch 方法用来监测 $route 的变化,以获取当前路由信息
    // $route: function(to, from) {
    //   console.log(" watch $route : ", to, from)
    //   this.activeIndex = this.$route.path;
    // }
  // },
  // methods: {
    // 当引入 el-menu 的 router 属性后,以下的 handleSelect跳转 就不需要了
    // 路由跳转处理
    // handleSelect(key, keyPath) {
    //   console.log(key, keyPath);
    //   this.$router.push(key)
    // }
  // },
  mounted() {
    if (this.setActiveRoute) {
      this.setActiveRoute(this.$route.matched[1].path);
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
