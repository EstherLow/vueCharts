import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userChartTitle: 'Sample Chart',
    selectedChartType: '',
    chartTypes: []
  },
  mutations: {
    setChartTitle (state, payload) {
      state.userChartTitle = payload
    }
  },
  actions: {
    setChartTitle ({commit}) {
      commit('setChartTitle')
    }
  }
});
