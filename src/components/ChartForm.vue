<template>
    <div id="form">
        <div class="form-container">
            <h4>Chart Data <span>click on row to edit data</span></h4>
            <div class="row">
                <div class="input-table" v-show="userData.length > 0">
                        <table>
                            <thead>
                                <tr>
                                    <th>name</th>
                                    <th>y</th>
                                    <th>color</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="each,idx in userData" :key="each.name" @click="selectRow(idx)">
                                    <td>{{each.name}}</td>
                                    <td>{{each.y}}</td>
                                    <td>{{each.color}}</td>
                                </tr>
                            </tbody>
                        </table>
            </div>
            </div>
            <div class="row mt-1">
                <InputData></InputData>
            </div>
            <h4 class="mt-5">Customise Chart</h4>
            <!-- <div class="row mt-1">
                <Button class="button-orange" :onClick="addRow">
                    <template slot="button-text" class="button-text">Add Data</template>
                </Button>
            </div> -->
            <div class="row mt-1">
                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" v-model="showLegend">
                    <label class="form-check-label" >Show Legend</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" v-model="enableTooltip">
                    <label class="form-check-label" >Enable tooltip</label>
                </div>
            </div>
        </div>
        <div></div>

    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Button from './common/Button'
import InputData from './common/InputData'
export default {
    components: { Button, InputData }, 
    data () {
        return {
            newCat: '',
            newCategories: [],
            showLegend: false,
            enableTooltip: false,
        }
    },
    methods: {
        ...mapActions(["changeUserChartOptions"]),
        addNewCat: function () {},
        addRow: function () {},
        pushDataPoint: function () {},
        selectRow: function () {}
    },
    computed: {
        ...mapState(["userChartOptions", "chartData", "selectedChartType", "chartData"]),
        xAxisCat: {
            get: function () {
                return this.userChartOptions.xAxis.categories
            }
        },
        sampleData: {
            get: function () {
                return this.userChartOptions.series[0].data
            }
        },
        userData: {
            get: function () {
                return this.chartData
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.form-container {
    font-size: 0.8rem;

    h4 {
        font-size: 1.2rem;

        span {
            font-size: 0.7rem
        }
    }
}
.row {
    margin: 0px;
}
table {
    width: 100%;
}
table, th, tr {
    border: 1px solid grey;
    font-size: 13px;
    font-weight: 500;
    text-align: center;
}
table>thead>tr>th, table>tbody>tr>td {
    width: 33%;
}
table>tbody>tr>td {
    padding: 2px;
    border: 1px solid grey;
    height: 20px;

}
.input-table {
    width: 100%;
}

</style>

