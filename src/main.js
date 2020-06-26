import Vue from 'vue';
import App from './App.vue';
import routes from './routes/routes';
import VueRouter from 'vue-router';
import { http } from './lib/http';

Vue.config.productionTip = false;

Vue.use(VueRouter);

//  manually register the http client
//  for global injector as a singleton
Vue.use({
  install(Vue) {
    Vue.prototype.$http = http;
  },
});

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
