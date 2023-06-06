<template>
    <div>
        <h1>Hello {{ FullName }} </h1>
    </div>
</template>

<script>
import {computed} from 'vue'

    export default {
        name : "ComponentProp",
        props : ['firstname' , 'lastname'],
        setup(props){
     const FullName =   computed(()=>{
        return `${props.firstname} ${props.lastname}`
     })
            return {
                FullName
            }
        },
    }
</script>

<style scoped>

</style>