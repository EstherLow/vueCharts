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
      bar: {
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
        plotOptions: {
            series: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    inside: false,
                    style: {
                        textOutline: 'none', fontSize: '12pt', color: '#000'
                    }

                }
            }
        },
        tooltip: {
            formatter: function () {
                return this.point.name + ': ' + this.point.y
            }
        },
        series: []
      },
      stacked:{
        chart:{
          type: 'column',
          height: 400
        },
        title: {
            text: null
        },
        xAxis: { categories: ['CatA', 'CatB', 'CatC', 'CatD'] },
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
            enabled: true,
            layout: 'horizontal'
        },
        plotOptions: {
            series: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    inside: true,
                    style: {
                        textOutline: 'none', fontSize: '12pt'
                    }

                }
            }
        },
        tooltip: {
            formatter: function () {
                return this.point.series.name + ': ' + this.point.y
            }
        },
        series: []
      },
      pie:{
          chart:{
            type: 'pie',
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
            enabled: true,
            layout: 'horizontal'
        },
        plotOptions: {
          pie: {
              showInLegend: true,
              dataLabels: {
                distance: -30,
                y: -20,
                useHTML: true,
                formatter: function () {
                  return '<div><span style="font-size: 16pt; margin-bottom: 3pt;">' + this.y + '</span><br/><span style="font-size: 12pt">'+ this.key +'</span></div>'
                },
                style: {
                    textOutline: 'none'
                }
              }
          }  
        },
        tooltip: {
            formatter: function () {
                return this.point.name + ': ' + this.point.y
            }
        },
        series: []
      },
      line:{
        chart:{
          type: 'line',
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
            enabled: true,
            layout: 'horizontal'
        },
        plotOptions: {},
        tooltip: {
            formatter: function () {
                return this.point.series.name + ': ' + this.point.y
            }
        },
        series: []
      }
    },
    sampleSimpleData: {
        name: 'Simple Bar',
        colorByPoint: true,
        data: [
            {name: 'CatA', y: 10, color: '#FC707A'},
            {name: 'CatB', y: 7, color: '#FFE571'},
            {name: 'CatC', y: 8, color: '#8770DD'},
            {name: 'CatD', y: 15, color: '#7AEC68'}
        ],
      },
    sampleChartData: [
      {name: 'PointA', data: [10,2,5,7], color: '#FC707A'},
      {name: 'PointB', data: [5,6,8,9], color: '#FFE571'},
      {name: 'PointC', data: [9,8,6,2], color: '#8770DD'},
      {name: 'PointD', data: [3,2,1,3], color: '#7AEC68'}
    ],
    chartOptionsChanged: false
  },
  mutations: {
    setChartTitle (state, payload) {
      state.userChartTitle = payload
    },
    setSelectedChartType (state, payload) {
      state.selectedChartType = payload
      state.chartOptionsChanged = true
    },
    setIsLoading (state, bool) {
      state.setIsLoading = bool
    },
    changeChartOptions (state, obj, data) {
      state.legacyChartOptions = {...state.chartOptions}
      let keys = Object.keys(obj)
      keys.forEach(function (k) {
        Vue.set(state.chartOptions, k, obj[k])        
      })
      state.isLoading = false
      state.chartOptionsChanged = true
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
    },
    resetChartOptionsChanged (state, bool) {
      state.chartOptionsChanged = bool
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
    resetChartOptionsChanged({commit}, bool) {
      commit('resetChartOptionsChanged', bool)
    }
  }
});
