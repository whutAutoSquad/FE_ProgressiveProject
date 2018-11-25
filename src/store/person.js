const systemConfig = {
  namespaced: true,
  state: {
    areaData: []
  },
  mutations: {
    INSERT_DATA: (state, { code, addr }) => {
      if (code && addr) {
        state.areaData.push({
          code, 
          addr
        })
      }
    },
    GET_DATA: (state, areaData) => {
      if (areaData instanceof Array) {
        state.areaData = [].concat(areaData);
      }
    }
  },
  actions: {
    insertData({commit}, value) {
      commit('INSERT_DATA',value);
    },
    getData({commit}, {areaData}){
      console.log("getData: ",areaData)
      commit('GET_DATA', areaData)
    }
  }
}

export default systemConfig