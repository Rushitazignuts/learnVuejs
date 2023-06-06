<template>
    <div>
<button @click="increment">Click {{ counter }} times</button>
    </div>
</template>

<script>
//import CounterMixin from '../mixin/counter'
import useCounter from '@/composible/useCounter';
    export default {
        name : "ClickCounter",
        setup(){
const {counter, increment} = useCounter(100,5)
return {
    counter,
    increment
}
        },
       // mixins:[CounterMixin],
        // data(){
        //     return {
        //        counter : 100,
        //     }
        // }
        
    }
</script>

<style scoped>

</style>