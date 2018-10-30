import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userChartTitle: 'Sample Chart',
    selectedChartType: '',
    chartTypes: [],
    isLoading: false,
    chartOptions: {
        type: ["bar", "column", "line", "pie", "stacked"],
        height: 400,
      },
    chartData: []
    
  },
  mutations: {
    setChartTitle (state, payload) {
      state.userChartTitle = payload
    },
    setSelectedChartType (state, payload) {
      state.selectedChartType = payload
    },
    setIsLoading (state, bool) {
      state.setIsLoading = bool
    }
  },
  actions: {
    setChartTitle ({commit}, payload) {
      commit('setChartTitle', payload)
    },
    setSelectedChartType ({commit}, payload) {
      commit('setSelectedChartType', payload)
    },
    setIsLoading ({commit}, bool) {
      commit('setIsLoading', bool)
    }
  }
});
