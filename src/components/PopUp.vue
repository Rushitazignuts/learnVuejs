<template>
    <div>
<h1>Component communication</h1>
<button @click="$emit('Close')">Close Popup</button>
    </div>
</template>

<script>
    export default {
        name : "PopUp",
        emits:['Close']
        
    }
</script>

<style scoped>

</style>