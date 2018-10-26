<template>
    <div id="main-screen">
        <h1>Preview</h1>
        <div class="chart-container">
            <h3>{{userChartTitle}}</h3>
            <div id="img-placeholder">
                <img class="grayscale" src="../assets/bar-chart-icon.png">
            </div>
            <div class="button-wrapper">
                <Button class="btn btn-success btn-md">
                    Click to select chart type
                </Button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import Button from './common/Button'
export default {
    components: { Button },
    data () {
        return {}
    },
    methods: {

    },
    computed: {
        ...mapState(['userChartTitle'])
    }
}
</script>
<style lang="scss" scoped>

 h1 {
     color: $color-primary-0
 }
 .chart-container {
     width: 100%;
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
