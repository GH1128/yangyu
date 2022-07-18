
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import cuCustom from "./components/cu-custom/cu-custom.vue"
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})


Vue.component('cu-custom', cuCustom);
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif