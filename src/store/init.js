const systemConfig = {
	namespaced: true,
	state: {
		cardsData: [{
			title: 't1 2018-11-01',
			details: 'This is fake details. (2018-11-01)'
		},{
			title: 't1 2018-11-02',
			details: 'This is fake details. (2018-11-02)'
		},{
			title: 't1 2018-11-03',
			details: 'This is fake details. (2018-11-03)'
		}]
	},
	mutations: {
		INSERT_DATA: (state, { title, details }) => {
			if (title && details) {
				state.cardsData.push({
					title, 
					details
				})
			}
		} 
	},
	actions: {
		insertData({commit}, value) {
			commit('INSERT_DATA',value);
		}
	}
}

export default systemConfig