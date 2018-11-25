const config = {
  namespaced: true,
  state: {
    eventData: []
  },
  mutations: {
    INSERT_DATA: (state, { date, person, locate, detail }) => {
      if (date && person && locate && detail) {
        state.eventData.push({
          date, 
          person,
          locate,
          detail,
        })
      }
    },
    GET_DATA: (state, data) => {
      if (data instanceof Array) {
        state.eventData = [].concat(data);
      }
    }
  },
  actions: {
    insertData({commit}, value) {
      commit('INSERT_DATA',value);
    },
    getData({commit}, {data}){
      console.log("getData: ",data)
      commit('GET_DATA', data)
    }
  }
}

export default config