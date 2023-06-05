<template>
    <div>
<button @click="increment">Click {{ counter }} times</button>
    </div>
</template>

<script>
import CounterMixin from '../mixin/counter'
    export default {
        name : "ClickCounter",
        mixins:[CounterMixin],
        data(){
            return {
               counter : 100,
            }
        }
        
    }
</script>

<style scoped>

</style>