<template>
    <div>
<h1 v-bind = "$attrs">{{  title }}</h1>
<h2>{{ isActive ? 'yes' : 'No'}}</h2>

    </div>
</template>

<script>    
    export default {
        name : "BindingCom",
        props:{
           title :{
            type:String ,
            required:true,
            default :"hello world" // you set a default title
            },
           isActive :Boolean,
           
        },
        
        
    }
</script>

<style scoped>

</style>