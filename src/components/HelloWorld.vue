<template>
  <!-- This is the place where we can have our template (view defined and can update it in realtime using virtual dom, same as react) -->
  <h1>{{ msg }}</h1>
</template>

<script>
// This is the place where we put the logic of the code (model)
export default {
  // can take 4 things atleast: data (for data), methods (functions), name, props
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- adds style to the template of the code -->
<style scoped>

</style>
