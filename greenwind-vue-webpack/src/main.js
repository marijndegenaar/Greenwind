// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from './store'
import Buefy from 'buefy'

sync(store, router)
// --- It adds a route module into the store, which contains the state representing the current route:
//      store.state.route.path   // current path (string)
//      store.state.route.params // current params (object)
//      store.state.route.query  // current query (object)

// Vue.use(ElementUI)
Vue.use(Buefy)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
