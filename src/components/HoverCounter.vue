<template>
    <div>
        <button @mouseover="increment">Click {{ counter }} times</button>
    </div>
</template>

<script>
       // import CounterMixin from '../mixin/counter'
       import useCounter from '@/composible/useCounter';
    export default {
        name : "HoverCounter",
        //mixins:[CounterMixin]
        setup(){
const {counter, increment} = useCounter()
return {
    counter,
    increment
}
        },
        
    }
</script>

<style scoped>

</style>