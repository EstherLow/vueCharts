<template>
    <div id="form">
        <div class="form-container">
            <label>Enter Categories: {{newCat}}</label>
            <Input :placeholderText="xAxisCat" :key="each" v-model="newCat">
                <template slot="button">
                    <button class="btn btn-primary" @click.native="addNewCat">
                        <font-awesome-icon icon="plus"></font-awesome-icon>
                    </button>
                </template>
            </Input>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Input from './common/Input'
export default {
    components: { Input }, 
    data () {
        return {
            newCat: ''
            newCategories: []
        }
    },
    methods: {
        ...mapActions(["changeUserChartOptions"]),
        addNewCat: function () {
            
        }
    },
    computed: {
        ...mapState(["userChartOptions", "chartData", "selectedChartType"]),
        xAxisCat: {
            get: function () {
                return this.userChartOptions.xAxis.categories
            }
        }

    }
}
</script>
<style lang="scss" scoped>
.form-container {
    font-size: 0.8rem;
}
.row {
    margin: 0px;
    padding: 10px;
}
</style>

