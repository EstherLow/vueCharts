<template>
    <div id="radio">
        <div class="radio-wrapper">
            <div class="img-wrapper">
                <img :src="imgSrc" alt="" />
            </div>
            <div class="label-wrapper">
                <span>{{labelText}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'RadioButtons',
    props: {
        imgSrc: String,
        labelText: String
    }, 
    data () {
        return {
            // selectedRadio: ''
        }
    },
    methods: {
        
    },
     computed: {

    }
}
</script>
<style lang="scss" scoped>
    img {
        width: 60px;
        height: 60px;
    }
    .radio-wrapper {
        text-align: center;
    }

</style>

