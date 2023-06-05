<template>
    <div>
{{count}}
<button @click="increment">Increase</button>
{{fname}} {{lname}}
<button @click="change">change</button>
    </div>
</template>

<script>
import {ref,reactive,toRefs} from 'vue'
    export default {
        name : "RepMethods",
        setup(){
            const count = ref(0)
            const state = reactive({
                fname : "john",
                lname :"duo"
            })
            function increment(){
                count.value ++;
            }
            function change(){
                state.fname = "clerk",
                state.lname ="kant"
            }
            return {count,
              increment,
              change,
             ...toRefs(state), 
             
        }
    
    }
    }
</script>

<style scoped>

</style>