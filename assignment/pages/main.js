
import Vue from 'vue'

import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import './callAPI.vue'
import './main.scss'



Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
