import Vue from "vue";
import Vuex from "vuex";
import { stat } from "fs";

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
    chartOptions: {
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
      plotOptions: {
        
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
    },
    sampleChartData: [
      {name: 'PointA', data: [10,2,5,7], color: '#FC707A'},
      {name: 'PointB', data: [5,6,8,9], color: '#FFE571'},
      {name: 'PointC', data: [9,8,6,2], color: '#8770DD'},
      {name: 'PointD', data: [3,2,1,3], color: '#7AEC68'}
    ]
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
    changeChartOptions (state, obj, data) {
      state.legacyChartOptions = state.chartOptions
      let keys = Object.keys(obj)
      keys.forEach(function (k) {
        state.chartOptions[k] = obj[k]
      })
      if (state.selectedChartType !== 'bar' && state.selectedChartType !== 'pie') {
        state.chartOptions.series = []
        if (!data) {
          state.chartOptions.series = state.sampleChartData
        } else {
          state.chartOptions.series = data
        }
      }
      state.isLoading = false
    },
    changeChartData (state, payload) {
      state.chartOptions.series = []
      if (!payload) {
        state.chartOptions.series = state.sampleChartData
      } else {
        state.chartOptions.series = payload
      }
      state.isLoading = false
    },
    setChartData (state, obj) {    
      state.chartData.push(obj)
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
    changeChartOptions ({commit}, obj) {
      commit('changeChartOptions', obj)
    },
    setChartData ({commit}, obj) {
      commit('setChartData', obj)
    },
    changeChartData({commit}, arr) {
      commit('changeChartData', arr)
    },
  }
});
