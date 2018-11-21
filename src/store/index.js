import Vue from 'vue'
import Vuex from 'vuex'
import init from './init'
import area from './area'
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    init,
    area
  }
})

export default store