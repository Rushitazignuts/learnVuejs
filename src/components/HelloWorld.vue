<template>
<div>
    <h1>hello {{name}} -- {{name1}}</h1>
    <slot>slot default</slot>
</div>
  
</template>
<script>

export default {
    name : "HelloWorld",
    props : ['name', 'name1']
}

</script>

