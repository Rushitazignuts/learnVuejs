<template>
    <div>
        <button @mouseover="increment">Click {{ counter }} times</button>
    </div>
</template>

<script>
        import CounterMixin from '../mixin/counter'

    export default {
        name : "HoverCounter",
        mixins:[CounterMixin]
        
    }
</script>

<style scoped>

</style>