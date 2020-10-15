import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Index from '@/views/index.vue';
import Content from '@/views/content.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.Base_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    { path: "/index", component: Index },
    { path: "/content/:id", component: Content }
  ]
});
