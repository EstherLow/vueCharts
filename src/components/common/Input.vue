<template>
    <div>   
        <div class="form-group">
            <!-- <label>{{labelText}}</label> -->
             <div class="input-group">
                <input type="text" class="form-control" 
                    :placeholder="placeholderText"
                    v-bind="$attrs"
                    :value="value"
                    v-on="inputListeners"
                />
                <div class="input-group-append">
                    <slot name="button"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    inheritAttrs: false,
    props: ['placeholderText', 'value'],
    computed: {
        inputListeners: function () {
            let vm = this
            return Object.assign({}, 
                this.$listeners,
                {
                    input: function (event) {
                        vm.$emit('input', event.target.value)
                    }
                }
            )
        }
    }
}
</script>

