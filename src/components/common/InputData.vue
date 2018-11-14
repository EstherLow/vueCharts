<template>
    <div id="input-data">
        <div class="row mt-2">
            <div class="col-sm-4">
                <label>Name(x-axis)</label>
                <input type="text" v-model="point.name" placeholder='CatA'/>
            </div>
            <div class="col-sm-4">
                <label>Y-value</label>
                <input type="text" v-model="point.y" placeholder='10'/>
            </div>
            <div class="col-sm-4">
                <label>Color</label>
                <input type="text" v-model="point.color" placeholder='#FC707A' v-on="inputListeners" /></div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
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
          
            this.point.name = ''
            this.point.y = ''
            this.point.color = ''
      
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
                    let clone = Object.assign({}, vm.point)
                    vm.setChartData(clone)
                    setTimeout(vm.initPointData, 500)
                    
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
