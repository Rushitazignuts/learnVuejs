<template>
    <div>
option - {{o_firstName}}
composition - {{c_firstName}}
{{greet}}
<h3>composition -  {{state.firstname}} - {{state.lastName}} - {{state.heroName}} </h3>
<h4>composition - {{reactiveHero}}</h4>
{{name}}
    </div>
</template>

<script>
import { ref,reactive } from 'vue'
    export default {
        name : "CompoApi",
        setup(){
            const name = ref('vuejs')
            setTimeout(()=>{
                name.value ='vuejs 3'
            },2000)

const c_firstName = ref('princess') //replacing data with ref
c_firstName.value = "clerk"
const greet =  `Hello ${c_firstName.value}`
console.log(c_firstName)

const state = reactive ({
    firstname : "john",
    lastName : "Mike",
    heroName : "diana"
})
 const reactiveHero =  `Hello ${state.firstname}  ${state.lastName}  ${state.heroName}`

return{

 c_firstName,
 greet,
 state,
 reactiveHero,
 name
}

},
 


        
data(){
    return {
        o_firstName :"bruce"
    }
}
    }
</script>

<style scoped>

</style>