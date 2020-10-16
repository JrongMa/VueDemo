<template>
  <div>
    <p v-text="dat.emp_name"></p>
  </div>
</template>



<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      dat: {},
    };
  },
  created() {
    console.log(this.id);
    this.getdate();
  },
  methods: {
    getdate() {
      this.$axios.get("/Base/GetEmployee2/"+this.id, null, (r) => {
        this.dat = r.data;
      });
    },
  },
};
</script>

<style>
</style>