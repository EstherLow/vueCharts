import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Highcharts from 'highcharts'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleNotch, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


window.$ = $

library.add(faCircleNotch, faPlus)

Vue.use(Highcharts)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
