import Vue from 'vue'
import App from './App.vue'

import {store} from "./store/"
import {router} from "./routes.js"

import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.root = 'https://raw.githubusercontent.com/pashinskiy/warehouse/main/first-spa/';

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
