<template>
    <div id="main-screen">
        <div class="chart-container">
            <div v-if="isLoading">
                <loading></loading>
            </div>
            <div v-if="!isLoading">
            <h3>{{userChartTitle}}</h3>
            <!-- <div id="img-placeholder">
                <img class="grayscale" src="../assets/bar-chart-icon.png">
            </div> -->
            <div>
                <highcharts :options="userChartOptions"></highcharts>
            </div>
            <div class="button-wrapper">
                <Button class="btn btn-success btn-md" :onClick="selChartType">
                    Click to select chart type
                </Button>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import loading from "./common/loading"
import Button from './common/Button'

export default {
    components: { Button, loading },
    data () {
        return {
    
        }
    },
    methods: {
        selChartType() {
         console.log('clicked')  
        }
    },
    computed: {
        ...mapState(['userChartTitle', 'isLoading', 'userChartOptions'])
    }
}
</script>
<style lang="scss" scoped>

 h1 {
     color: $color-primary-0
 }
 .chart-container {
     width: 100%;
     min-height: 500px;
     border: 1px solid #c8c8c8;
     padding: 20px;
     h3 {
         margin: 20px 0px
     }
     img {
        -webkit-filter: opacity(.2);
        filter: opacity(.2); 
     }
     .button-wrapper {
         margin: 20px 0px;
     }
 }

</style>
