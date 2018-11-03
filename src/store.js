import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userChartTitle: 'Sample Chart',
    selectedChartType: 'bar',
    chartTypes: [],
    isLoading: false,
    chartOptions: {},
    chartData: [],
    legacyChartOptions: {},
    userChartOptions: {
      chart:{
          type: 'column',
          height: 400
      },
      title: {
          text: null
      },
      xAxis: {
          categories: ['CatA', 'CatB', 'CatC', 'CatD'],
      },
      yAxis: {
          min: 0,
          max: 15,
          title: {
              text: null
          }
      },
      credits: {
          enabled: false
      },
      legend: {
          enabled: false,
          layout: 'vertical'
      },
      tooltip: {
          formatter: function () {
              return this.point.name + ': ' + this.point.y + '%'
          }
      },
      series: [
          {
              name: 'Simple Bar',
              colorByPoint: true,
              data: [
                  {name: 'CatA', y: 10, color: '#FC707A'},
                  {name: 'CatB', y: 7, color: '#FFE571'},
                  {name: 'CatC', y: 8, color: '#8770DD'},
                  {name: 'CatD', y: 15, color: '#7AEC68'}
              ],
          }
      ]
    }
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
    },
    changeUserChartOptions (state, obj) {
      state.legacyChartOptions = state.userChartOptions
      let keys = Object.keys(obj)
      keys.forEach(function (k) {
        state.userChartOptions[k] = obj[k]
      })
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
    },
    changeUserChartOptions ({commit}, obj) {
      commit('changeUserChartOptions', obj)
    }
  }
});
