<template>
    <div>
<input type="text" v-model="firstname">
{{ firstname }}

    </div>
</template>

<script>
import {ref,watch} from 'vue'

    export default {
  
        name : "CompoWatch",
        setup(){
const firstname = ref('')
watch(firstname, (newValue,oldValue)=>{
    console.log('newValue' , newValue);
    console.log('oldValue' , oldValue);

},{
immediate:true}
)
return {
    firstname
}
        },

        data(){
            return {
                name :"codevolution"
            }
        },
        watch:{
            name(newValue, oldValue){
                console.log(newValue);
                console.log(oldValue);
            }
        }
    }
</script>

<style scoped>

</style>