<template>
    <div>
<button @click="getData">Load Data</button>
<div v-for="post in posts" :key=post.id>
    <h3>{{post.id}} - {{post.name}} - {{post.username}}</h3>
    
  
</div>


<form @submit.prevent="cretePost">
    <div>
        <label for="id">Id</label>
        <input type="text" id="id" v-model="formData.id">
         </div>

         <div>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="formData.name">
         </div>

         <div>
        <label for="username">username</label>
        <input type="text" id="username" v-model="formData.username">
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
                    id : '',
                    name : '',
                    username : ''
                }
            }
        },
        methods: {
            getData(){
                axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
                    console.log(response.data);
                    this.posts = response.data
                })
                .catch((error)=>{
console.log(error)
                })

                },
                cretePost(){
                    axios.post('https://jsonplaceholder.typicode.com/users',this.formData).then((response)=>{
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