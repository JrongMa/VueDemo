<template>
  <div>
    <p>{{$route.params.id}}</p>
    <h1>{{this.id}}</h1>
    <ul>
      <li>{{this.dat.Emp_name}}</li>
      <li>{{this.dat.Sy_flag}}</li>
    </ul>
  </div>
</template>



<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      dat: {}
    };
  },
  created() {
    this.getdate();
  },
  methods: {
    getdate() {
      this.$axios.get("/Base/GetSingleEmplpyee",{id:this.id},(r)=>{
        this.dat = r.data;
        console.log(r.data);
      });
    },
  },
};
</script>

<style>
</style>