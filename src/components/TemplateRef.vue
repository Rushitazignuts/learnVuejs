<template>
    <div>
<input type="text" ref="inputRef">
<HttpGet  ref="postRef"></HttpGet>
    </div>
</template>

<script>
        import HttpGet from './HttpGet.vue'
    export default {
        name : "TemplateRef",
        components:{
            HttpGet
        },
        mounted(){
        console.log(this.$refs.postRef);
            this.$refs.inputRef.focus();

        }
    }   
</script>

<style scoped>

</style>