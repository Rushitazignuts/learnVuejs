<template>
    <div>
<input type="text" ref="inputRef">
<HttpGet  ref="postRef"></HttpGet>
    </div>
</template>

<script>
import{onMounted, ref} from 'vue'
        import HttpGet from './HttpGet.vue'
    export default {
        name : "TemplateRef",
        components:{
            HttpGet
        },

        setup(){
            const inputRef = ref(null)
            onMounted(()=>{
                inputRef.value.focus()
                return {
                    inputRef
                }
            })

        },
        // mounted(){
        // console.log(this.$refs.postRef);
        //     this.$refs.inputRef.focus();

       // }
    }   
</script>

<style scoped>

</style>