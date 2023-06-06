<template>
    <div>
        <input type="text" placeholder="fn" v-model="firstname">
        <input type="text" placeholder="ln" v-model="lastname">
        <ComponentProp :firstname="firstname" :lastname="lastname" ></ComponentProp>
    </div>
</template>

<script>
import {ref} from 'vue'
import ComponentProp from './ComponentProp.vue';
    export default {
        name : "CompoProp",
        components:{
            ComponentProp
        },
        setup(){
            const firstname = ref('')
            const lastname = ref('')
            return {
                firstname, lastname
            }
        }
    }
</script>

<style  scoped>

</style>