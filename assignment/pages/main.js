
import Vue from 'vue'
import App from '../.nuxt/layouts/default.vue'
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import './callAPI.vue'
import './main.scss'
import './default.vue'


Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
