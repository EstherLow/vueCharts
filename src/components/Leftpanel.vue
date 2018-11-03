<template>
    <div id="left-panel">
        <div class="card-wrapper">
            <Card @click.native="clickStep('step1')">
                <template slot="header">
                    <h3>Step 1: Enter title of chart</h3>
                </template>
            </Card>
            <transition>
                <div v-if="showInput === 'step1'" class="input-section">
                    <input type="text" class="form-control" v-model="chartTitle" @change="inputChange" placeholder="Enter Your Chart Title Here">
                </div>
            </transition>
            <Card @click.native="clickStep('step2')">
                <template slot="header">
                    <h3>Step 2: Click to change/select type of chart</h3>
                </template>
            </Card>
            <transition>
                <div v-if="showInput === 'step2'" class="input-section clearfix">
                    <ChartButton 
                        class="radio-button" 
                        v-for="each in radioButtons" 
                        :key="each.radioVal"
                        :imgSrc="each.imgSrc" 
                        :labelText="each.label"  
                        @click.native="radioClicked(each.radioVal)"
                        :class="{'selected': selectedChartType === each.radioVal}"
                    />
                </div>
            </transition>
            <Card @click.native="clickStep('step3')">
                <template slot="header">
                    <h3>Step 3: Enter Data and Customise Chart</h3>
                </template>
            </Card>
            <transition>
                <div v-if="showInput === 'step3'" class="input-section">
                    <ChartForm></ChartForm>
                </div>
            </transition>
            <Card @click.native="clickStep('step4')">
                <template slot="header">
                    <h3>Step 4: Generate HTML codes for email</h3>
                </template>
            </Card>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import Card from './common/Card'
import ChartButton from './ChartButton'
import ChartForm from './ChartForm'
export default {
    name: "LeftPanel",
    components: {
        Card, ChartButton, ChartForm
    },
    data () {
        return {
            showInput: 'step1',
            chartTitle: '',
            radioButtons: [
                {imgSrc: require('../assets/basic-bar-chart.png'), radioVal: 'bar', label: 'Bar Charts'},
                {imgSrc: require('../assets/line-chart.png'), radioVal: 'line', label:'Line Chart'},
                {imgSrc: require('../assets/bar-chart-1.png'), radioVal: 'stacked', label: 'Stacked Bar Charts'},
                {imgSrc: require('../assets/pie-chart-2.png'), radioVal: 'pie', label:'Pie Chart'},
            ]
        }
    },
    methods: {
        ...mapActions(["setChartTitle", "setSelectedChartType"]),
        clickStep: function(name) {
            console.log(name)
            this.showInput = name
            if ( name === "step3") {

            }
        },
        inputChange: function() {
            this.setChartTitle(this.chartTitle)
        },
        radioClicked: function (val) {
            this.setSelectedChartType(val)
            console.log('this is ', val)
            this.$forceUpdate()
        },
    },
    computed: {
        ...mapState(["selectedChartType"])
    }
}
</script>
<style lang="scss" scoped>
    .radio-button {
        width: 46%;
        float: left;
        margin-right: 2%;
        margin-bottom: 20px;
        height: 120px;
        padding: 10px;
    }
    .selected {
        border: 1px solid $color-secondary-2-1;
    }
</style>

