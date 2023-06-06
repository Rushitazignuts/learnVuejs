<template>
    <div>
<input type="text" v-model="refFname">
<input type="text" v-model="refLname">
Composition Computed{{ refFullname }}

<input type="text" v-model="reactiveFname">
<input type="text" v-model="reactiveLname">
Reactive Computed{{ reactiveFullname }}
    </div>  
</template>

<script> 
import {ref,computed,reactive, toRefs} from 'vue'
    export default {
        name: "ComputedProp",
        setup(){
         const  refFname = ref('')
         const  refLname = ref('')
         const refFullname = computed(function(){
            return `${refFname.value} ${refLname.value} `
         })

         const state = reactive({
            reactiveFname : '',
            reactiveLname : ''
         })
         const reactiveFullname = computed(function(){
            return `${state.reactiveFname} ${state.reactiveLname} `
         })

         return {
            refFname,
            refLname,
            refFullname,
            ...toRefs(state),
            reactiveFullname

         };
        }
    }
</script>

<style scoped>

</style>