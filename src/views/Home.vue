<template>
  <div class="t">home page</div>
</template>

<script>
export default {
  created () {
    this.$axios.get(
      '/Base/getEmployee', 
      null, 
      r => {console.log(r)}
    )
  }
  
}
</script>


<style>
.t{ color: red;font-size: 20px;}
</style>