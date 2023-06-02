<template>
  <div id="app">
<input type="text"    v-model="name">
<p>{{ name }}</p>
    <!-- attribute binding  -->
   <div v-bind:id ="headingId">hello</div> 

   <!-- att. binding using only colon not need to v-bind -->
   <button :disabled="isDisabled">hello</button> 

   <!-- text binding -->
  <h1>hello {{ name }}</h1>   
  <div v-html="hack"></div> 

  <!-- text binding diff is html and text using v-html apply also style  -->
  <div v-text="print"></div>  
  <div v-html="print"></div>  

  <!-- class binding -->
  <h2 v-bind:class="status">hello world</h2>

  <!-- diff is v-if and v-show v-if is false then not displayed in element and v-show is false but it is render in element with display-none -->
  <span v-if="seen">v-if</span> 
  <sapn v-show="seen">v-show</sapn>

<!-- conditional render -->
  <p v-if="num>0">positive</p>
  <p v-else-if="num<0">negative</p>
  <p v-else-if="num===0">zero</p>
  <p v-else>NaN</p>

  
  <ol>
    <li v-for="(todo,index) in todos" v-bind:key="todo">
     {{ index }} {{ todo.text }} {{ todo.prop }}
    </li>
  </ol>

<!-- using tempalate not need to key attribute -->
  <h3 v-for="(value,key,index) in obj" :key="value">{{ index }} - {{ key }} - {{ value }}</h3>
  <template v-for="(value,key,index) in obj" >{{ index }} - {{ key }} - {{ value }}</template>

  <!-- using title apply tooltip hover -->
  <span v-bind:title="msg">paragraph</span> 
  <span title="hello i am ruchi">hover me</span>

<!-- using template all 3 element are render separate and using div all 3 ele. render in div ele -->
  <template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>

<!-- event handling -->
<div v-for="name in names" :key="name">{{ name }}</div>
<input type="text" v-model="newname">

<!-- below both are same click event -->
<button v-on:click = "addName">Add</button> 
<button @click = "addName">Add</button>
<button v-on:click.stop = "submit">stop</button> 

<!-- form handling -->
<pre>
  {{ formValues }}
</pre>
<form @submit="submitForm">
<div>
  
<label for="name">Name</label>
<input type="text" id="name"   v-model="formValues.name"><br><br>
</div>
<div> 
<label for="profile">summary</label>
<textarea id="profile"  v-model="formValues.profile"/>
</div>
<div>
<label for="country">select country</label>
<select id="country" v-model="formValues.country">
  <option>Select</option>
<option value="india">india</option>
<option value="us">us</option>
<option value="canada">canada</option>
</select>
</div>
<div>
<label for="job">select country</label>
<select id="job" multiple v-model="formValues.location">
  <option>Select</option>
<option value="india">india</option>
<option value="us">us</option>
<option value="canada">canada</option>
</select>
</div>
<div>
<label>select skill</label>
<input type="checkbox" id="html" value="html" v-model="formValues.skillSet">
<label>HTML</label>
<input type="checkbox" id="css" value="css" v-model="formValues.skillSet">
<label>CSS</label>
<input type="checkbox" id="js" value="js" v-model="formValues.skillSet">
<label>JS</label>
</div>
<div>
<label>select skill</label>
<input type="radio" id="html" value="html" v-model="formValues.skill">
<label>HTML</label>
<input type="radio" id="css" value="css" v-model="formValues.skill">
<label>CSS</label>
<input type="radio" id="js" value="js" v-model="formValues.skill">
<label>JS</label>
</div>
<div>
<button>Submit</button>
</div>
</form>

<h4>Computed total : {{ total }}</h4>
<h1>{{ reversedMessage }}</h1>
<h2>{{ fullname }}</h2>

</div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {

 name : 'hello',
 firstName :'john',
 lastName :'duo',
 name1 : 'ruchita',
 print : `<b>ruchita</b>`,
 word:'name',
 hack : `<a href='#' onclick="alert('hiii')">hello world</a>`,
 headingId :'heading',
 isDisabled :true,
 status:'danger',
 seen: false,
 todos: [
      { text: 'Learn JavaScript', prop:'hi' },
      { text: 'Learn Vue', prop:'hi' },
      { text: 'Build something awesome', prop:'hi' }
    ],
    num: '',
    msg : "dlgkjifdjgi",
    ok : true,
    obj:{
      fname : "john",
      lname :"doe",
      age :30
    } ,
    newname : '',
    names :['hello','hii'],
    formValues :{
      name : '',
      profile :'',
      country :'',
      location : [],
      skillSet :[],
      skill :''
    },
    item :[
{price : 200},
{price : 200},
{price : 200},
{price : 200}
    ]

    

 
    }

  },
  methods:{

addName(){
this.names.push(this.newname);
this.newname=''
},
submit(){
  alert("hello!!.....")
},
submitForm(event){
  event.preventDefault();
  console.log('form', this.formValues)

},
    },
    computed: {
      total(){
return this.item.reduce((total, curr)=> (total = total + curr.price),0)
      },
      
      
      reversedMessage: function () {
     
      return this.name.split('').reverse().join('')
    },
    fullname: {
      get(){
        return ` ${this.firstName} ${this.lastName}`
      }
    }


    
  }
    }
  

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
