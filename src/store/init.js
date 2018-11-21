export default {
	namespaced: true,
	state: {
		displayAside: false
	},
	mutations: {
		TOGGLE_DISPLAY_ASIDE: (state) => {
			state.displayAside = !state.displayAside;
		} 
	},
	actions: {
		toggleDisplayAside({commit}) {
			console.log("triggered: toggleDisplayAside.")
			commit('TOGGLE_DISPLAY_ASIDE');
		}
	}
}