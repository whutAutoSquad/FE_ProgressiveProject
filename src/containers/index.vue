<template>
  <el-container class='main-container'>
    <!-- header -->
    <el-header>
      <i-header />
    </el-header>

    <el-container class='sub-container'>
      <!-- aside -->
      <el-aside width="auto" v-bind:style="{ display: displayAside ? 'block' : 'none' }" >
        <i-aside />
      </el-aside>

      <el-container class='context-container'>
        <!-- main -->
        <el-main>
          <i-main />
          <router-view></router-view>
        </el-main>

        <!-- footer -->
        <el-footer>
          <i-footer />
        </el-footer>
      </el-container>

    </el-container>

  </el-container>
</template>

<script>
import iHeader from './header'
import iAside from './aside'
import iMain from './main'
import iFooter from './footer'

// 引入 vuex
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('init')

export default {
  name: 'container',
  computed: {
    ...mapState({
      displayAside: state => state.displayAside
    })
  },
  methods: {
    ...mapActions([
      'toggleDisplayAside'
    ])
  },
  created(){
    console.log('container built.')
    var _self = this;
    document.onkeydown = function(e){
        var e = window.event;
        if(e.keyCode == 192){
            _self.toggleDisplayAside();
        }
    }
  },
  components: {
    iHeader,
    iMain,
    iAside,
    iFooter
  },
}
</script>

<style scoped>
.main-container {
  overflow-y: hidden;
  height: 100%;
}

.el-header {
  /* 设置底部边框弧线 */
  border-bottom: 1px solid lightsteelblue;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;

  /* 固定在顶部 part 1/2 */
  position: fixed;
  height: 60px;
  width: 100%;
  left: 0;
  top: 0;
  display: block;
  z-index: 1500;
  background-color: white;
}

.sub-container {
  margin-top: 70px;
  margin-bottom: 30px;
}

.sub-container .el-aside {
  border-right: 1px solid lightsteelblue;
  overflow: hidden;
}

</style>
