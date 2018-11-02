<template>
  <section class="main">
    <el-card v-for="cnt in 3" :key="cnt" class="i-card" >
      <div slot="header">
        2018-11-02 Bug报告
      </div>
      <div v-for="cnt in 4" :key="cnt" class="text item">
        {{'列表内容 ' + cnt }}
      </div>
    </el-card>
  </section>
</template>

<script>
export default {
  name: 'iMain',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.main {
    min-height: 900px;
}

.i-card {
  margin: 10px 0;
}
.i-card .text {
  font-size: 14px;
}

.i-card .item {
  padding: 10px 0;
}
</style>
