<template>
    <button @click="onClick">
        <p>
            <slot name="icon"></slot>
        </p>
        <p>
            <slot name='button-text'>Text</slot>
        </p>
    </button>    
</template>
<script>
export default {
    props: {
        onClick: {
            type: Function,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
    p {
        margin: 0px;
        vertical-align: middle;
    }
    button {
        border-radius: 5px;
    }

</style>