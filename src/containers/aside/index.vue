<template>
  <section class="aside">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>帮助</span>
      </div>
      <div>
        <el-collapse class="help-collapse">
          <el-collapse-item title="[A Asider]" >
            <div>切换 侧边栏</div>
          </el-collapse-item>
          <el-collapse-item title="[F Footer]" >
            <div>切换 底部栏</div>
          </el-collapse-item>
          <el-collapse-item title="[H Header]" >
            <div>切换 顶部栏</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-card>
  </section>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {}
  }
}

</script>
<style scoped>
.aside {
  /*padding: 20px 0 20px 15px;*/
}

.aside .box-card {
  height: 100%;
  min-height: 800px;
}

.aside .help-collapse {
  width: 200px;
}

</style>
