// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router/router.js';

// 引用API文件
import axios from './api/axios.js';
// 将API方法绑定到全局
Vue.prototype.$axios = axios;

import datetimeDo from './utils/index';
Vue.prototype.$datetimeDo = datetimeDo;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
