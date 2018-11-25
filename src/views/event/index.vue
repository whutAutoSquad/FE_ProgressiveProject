<template>
  <section class="main">
    <el-button @click="getData">查询</el-button>
    <el-card v-for="item in eventData" :key="item.code" shadow="always" class="i-card" >
      <div slot="header">
        <div>Type: {{ item.type }}</div>
      </div>
      <div>
        <p>Date: {{ item.date }}</p>
        <p>Person: {{ item.person }}</p>
        <p>Locate: {{ item.locate }}</p>
        <p>Detail: {{ item.detail }}</p>
      </div>
    </el-card>
  </section>
</template>

<script>
import axios from 'axios';
import { server } from '../../../config';
export default {
  data(){
    return {
      eventData: []
    }
  },
  methods: {
    async getData(){
      let res = await axios.post(server.entirePath+"/event/list",{
        type: 'note'
      });
      if (res.status == 200) {
        console.log(res);
        this.eventData = res.data.res;
      }
    }
  },
  created(){
    this.getData();
  }
}
</script>

<style scoped>
.main {
  min-height: 200px;
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

