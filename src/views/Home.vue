<template>
  <div class="t">home page</div>
</template>

<script>
export default {
  created () {
    this.$api.get(
      '/Base/getEmployee', 
      null, 
      r => {console.log(r)}
    )
  }
  
}
</script>


<style>
.t{ color: red;}
</style>