<template>
  <section class="main" v-loading="loading">
    <div id="geoChart" class="geo-chart"></div>
  </section>
</template>
<script>
export default {
  name: 'geoChart',
  data() {
    return {
      // loading 模态层
      loading: false,

    }
  },
  methods: {
    drawMap() {
      console.log('drawMap')
      this.geoChart.setOption(this.geoChartOptions)
    }
  },
  mounted() {
    if(BMap){
      // 使用这个 BMap
      console.log('BMap', BMap)
    }else{
      this.errorMessage('百度地图设置错误,请检查相关设置!')
      return;
    }

    //百度地图api功能：

    // 创建map实例
    let map = new BMap.Map('geoChart');
    // 初始化地图，设置中心点坐标和地图级别
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    // 添加地图类型控件
    map.addControl(new BMap.MapTypeControl({
      mapTypes: [
        BMAP_NORMAL_MAP,
        BMAP_HYBRID_MAP
      ]
    }));

    // 设置地图显示的城市，此项是必须设置的
    map.setCurrentCity('北京');
    // 开启鼠标滚轮缩放
    map.enableScrollWheelZoom(true);
  }
}

</script>
<style scoped>
.geo-chart {
  width: 100%;
  min-width: 500px;
  height: 100%;
  min-height: 800px;
}

</style>
