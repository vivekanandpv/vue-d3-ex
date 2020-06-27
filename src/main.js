import Vue from 'vue';
import App from './App.vue';
import routes from './routes/routes';
import VueRouter from 'vue-router';
import { store } from './state/state';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
