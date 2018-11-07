<template>
    <div id="input-data">
        <div class="row mt-2">
            <div class="col-sm-4">
                <label>Enter Category</label>
                <input type="text" v-model="point.name" placeholder='CatA'/>
            </div>
            <div class="col-sm-4">
                <label>Enter y-value</label>
                <input type="text" v-model="point.y" placeholder='10'/>
            </div>
            <div class="col-sm-4">
                <label>Enter Color</label>
                <input type="text" v-model="point.color" placeholder='#FC707A' v-on="inputListeners" /></div>
        </div>
    </div>
</template>
<script>
import {mapActions, mapState } from 'vuex'
export default {
    inheritAttrs: false,
    data() {
        return {
            point: {
                name: '',
                y: '',
                color: ''
            }
        }
    },
    methods: {
        ...mapActions(['setChartData']),
        initPointData: function () {
            let vm = this
            vm.point.name = ''
            vm.point.y = ''
            vm.point.color = ''
        },
        addData: function () {
            console.log('fired', this.point);
            if (this.point.y !== '') {
                this.setChartData(this.point)
            }
        }
    },
    computed: {
        inputListeners: function () {
            var vm = this
            return Object.assign({}, this.$listeners, {
                blur: function () {
                    console.log('blur', vm.point);
                    vm.setChartData(vm.point)
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    input[type=text] {
        width: 100%;
        border-radius: 5px;
        border: 1px solid #A99BDD;
    }
    ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #dfdfdf;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:    #dfdfdf;
   opacity:  1;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:    #dfdfdf;
   opacity:  1;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color:    #dfdfdf;
}
::-ms-input-placeholder { /* Microsoft Edge */
   color:    #dfdfdf;
}

::placeholder { /* Most modern browsers support this now. */
   color:    #dfdfdf;
}
</style>
