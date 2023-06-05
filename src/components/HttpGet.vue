<template>
    <div>
<!-- <button @click="getData">Load Data</button> -->
<div v-for="post in posts" :key=post.id>
    <h3>{{post.id}} - {{post.title}}</h3>
    <hr>
    <p>{{post.body}}</p>
</div>


<form @submit.prevent="cretePost">
    <div>
        <label for="userId">userId</label>
        <input type="text" id="userId" v-model="formData.userId">
         </div>

         <div>
        <label for="title">userId</label>
        <input type="text" id="title" v-model="formData.title">
         </div>

         <div>
        <label for="body">userId</label>
        <input type="text" id="body" v-model="formData.body">
         </div>
         <button>Create Post Data</button>
</form>

    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name : "HttpGet",
        created(){
this.getData();
        },
        data(){
            return {

                posts :[],
                formData:{
                    userId : '',
                    title : '',
                    body : ''
                }
            }
        },
        methods: {
            getData(){
                axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
                    console.log(response.data);
                    this.posts = response.data
                })
                .catch((error)=>{
console.log(error)
                })

                },
                cretePost(){
                    axios.post('https://jsonplaceholder.typicode.com/posts',this.formData).then((response)=>{
                    console.log(response.data);
                    this.posts = response.data
                })
                .catch((error)=>{
console.log(error)
                })
                }
            }
        }
    
</script>

<style scoped>

</style>