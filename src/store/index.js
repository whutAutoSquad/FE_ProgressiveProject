import Vue from 'vue'
import Vuex from 'vuex'
import init from './init'
import area from './area'
import event from './event'
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    init,
    area,
    event,
  }
})

export default store