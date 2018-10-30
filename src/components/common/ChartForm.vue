<template>
    <div id="form">
        <form class="form-inline">
            <div class="form-check form-check-inline" v-for="each in chartOptions.type">
                <label for="type" class="sr-only">{{each}} CHART</label>
                <input type="radio" class="form-check-input" v-model="selectedChartType">
            </div>
        </form>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data () {
        return {

        }
    },
    methods: {},
    computed: {
        ...mapState(["chartOptions", "chartData", "selectedChartType"])
    }
}
</script>
