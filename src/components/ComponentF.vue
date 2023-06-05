<template>
    <div>
<h1>F - {{username | capitalize}}</h1>
    </div>
    
</template>

<script>
    export default {
        name : "ComponentF",
        inject :['username'],
        filters:{
            capitalize(value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
        }
    }
</script>

<style scoped>

</style>