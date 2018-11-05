<template>
  <section class="main">
    <el-card v-for="item in cardsData" :key="item.title" shadow="always" class="i-card" >
      <div slot="header">
        {{ item.title }}
      </div>
      <div>
        {{ item.details }}
      </div>
    </el-card>
  </section>
</template>

<script>
export default {
  computed: {
    cardsData() {
      console.log(this.$store.state)
      return this.$store.state.init.cardsData
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
