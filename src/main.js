// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;
let config = {
  apiKey: "AIzaSyDatVY6Viy9e4ATDY5xlBtIKq8XtuOZArk",
  authDomain: "laravue-92cac.firebaseapp.com",
  databaseURL: "https://laravue-92cac.firebaseio.com",
  projectId: "laravue-92cac",
  storageBucket: "",
  messagingSenderId: "6803860087"
};

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  if(!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
})
