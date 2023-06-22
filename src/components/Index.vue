<template>
  <h4>{{ lit.id }} - {{ lit.title }}</h4>
</template>
<script>
  export default {
    name: "Index",
    props: ['lit'],
    setup(props) {
      
    }
  }
</script>
<style scoped>
</style>