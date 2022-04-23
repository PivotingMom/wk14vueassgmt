import Vue from 'vue'
import VueCompositionApi from "@vue/composition-api";
import App from './App.vue'
import { PiniaVuePlugin, createPinia } from 'pinia'

Vue.use(VueCompositionApi);
Vue.use(PiniaVuePlugin);
Vue.config.productionTip = false

const pinia = createPinia();

new Vue({
  pinia,
  render: h => h(App)
}).$mount('#app')
