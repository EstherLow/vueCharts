<template>
<div>
    <div id="chart"></div>
</div>

</template>
<script>
import Highcharts from 'highcharts'
import { mapActions, mapState } from 'vuex'
export default {
    mounted: function () {
        let vm = this
        console.log('vm.selectedChartType', vm.chartOptions[vm.selectedChartType]);  
        let chart = Highcharts.chart('chart', vm.chartOptions[vm.selectedChartType])
        chart.addSeries(this.sampleSimpleData, true)
    }, 
    watch: {
        chartOptionsChanged: function (val) {
            console.log('change watch', val);
            
            if (val === true) {
                this.redraw()
            }
        }
    },
    data () {
        return {}
    },
    methods: {
        ...mapActions(['resetChartOptionsChanged']),
        redraw: function () {
            let vm = this
            let chart = Highcharts.chart('chart', vm.chartOptions[vm.selectedChartType])
            console.log('vm.selectedChartType', vm.selectedChartType);
            
            if (vm.selectedChartType !== 'pie' && vm.selectedChartType !=='bar') {
                console.log(1);    
                vm.sampleChartData.forEach(function (e) {
                    chart.addSeries(e, true, true)
                })
            } else {
                console.log(2)
                chart.addSeries(vm.sampleSimpleData, true)
            }
            vm.resetChartOptionsChanged(false)
        }
    },
    computed: {
        ...mapState(['chartOptions', 'chartOptionsChanged', 'sampleChartData', 'sampleSimpleData', 'selectedChartType'])
    }
}
</script>
