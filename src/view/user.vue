<template>
  <div class='secDiv'>
    user com
  </div>
</template>

<script>
  export default {
    name: "user",
    mounted(){
      console.log(this.$route.path);
    }
  }
</script>

<style scoped>

</style>
