<template>
  <section class="main">
    <el-card v-for="item in areaData" :key="item.code" shadow="always" class="i-card" >
      <div slot="header">
        {{ item.code }}
      </div>
      <div>
        {{ item.addr }}
      </div>
    </el-card>
  </section>
</template>

<script>
import axios from 'axios';
import { server } from '../../../config';
export default {
  computed: {
    areaData() {
      console.log('views/event/index.vue: ', this.$store.state)
      return this.$store.state.area.areaData
    }
  },
  created(){
    // axios.get(server.entirePath+"?code=120000").then( (res) => {
    //   console.log("axios.res: ",res)
    //   let { status, data } = res;
    //   console.log(status);
    //   console.log(data);
    //   if( status == 200 ) {
    //     this.$store.dispatch({
    //       type: 'area/getData',
    //       areaData: data.res
    //     });
    //   }
    // })
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
