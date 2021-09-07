// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import "./assets/style.css"
import Rollbar from 'rollbar';

Vue.config.productionTip = false

Vue.config.errorHandler = (err, vm, info) => {
  vm.$rollbar.error(err);
  throw err; // rethrow
};

Vue.prototype.$rollbar = new Rollbar({
  accessToken:"95a8caddce88477484e07e0b54a39c81",
  captureUncaught:true,
  captureUnhandledRejections:true,
  payload:{
      // environment:"production",
      environment:"development",
      client: {
        javascript: {
          source_map_enabled: true, // true by default

          // -- Add this into your configuration ---
          code_version: "{CODE VERSION}",
          // ---------------------------------------

          // Optionally have Rollbar guess which frames the error was
          // thrown from when the browser does not provide line
          // and column numbers.
          guess_uncaught_frames: true
        }
      }
}})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
