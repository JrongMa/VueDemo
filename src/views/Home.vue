<template>
  <div>
   <Header></Header>
    <div class="article_list">
      <h1>test</h1>
      <ul>
        <li v-for="item in list" :key="item.emp_id">
          <time v-text="$datetimeDo.goodTime(item.cf_date)"></time>
          <router-link :to="'/content/' + item.emp_id">
            {{ item.emp_name }}
          </router-link>
        </li>
      </ul>
    </div>

    <Footer></Footer>
  </div>
</template>




<script>
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';

export default {
  components: {Header,Footer},
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios.get("/Base/GetEmployee2", null, (r) => {
        this.list = r.data;
        console.log(r);
      });
    },
  },
};
</script>

<style>
.article_list {
  margin: auto;
}
</style>