// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as firebase from 'firebase'

Vue.config.productionTip = false

let config = {
  apiKey: "AIzaSyD5bxChfqkY1R1VM-fTMJ6lYPXSI3U3YqY",
  authDomain: "codinity.firebaseapp.com",
  databaseURL: "https://codinity.firebaseio.com",
  projectId: "codinity",
  storageBucket: "codinity.appspot.com",
  messagingSenderId: "523509439629"
};

firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
