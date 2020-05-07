import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faSignOutAlt,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUser, faSignOutAlt, faEllipsisV);

import { firestorePlugin } from "vuefire";
import firebase from "firebase";
import "firebase/firestore";

Vue.use(firestorePlugin);

firebase.initializeApp({
  apiKey: "AIzaSyCn8nHt3YZDNNcLYOl6P67VjaRy-mzNQtY",
  authDomain: "learning-firebase-d3ebd.firebaseapp.com",
  databaseURL: "https://learning-firebase-d3ebd.firebaseio.com",
  projectId: "learning-firebase-d3ebd",
  storageBucket: "learning-firebase-d3ebd.appspot.com",
  messagingSenderId: "570477935491",
  appId: "1:570477935491:web:04f8995e9aefd2b1ecd4b6",
  measurementId: "G-MC0139M27B",
});

export const db = firebase.firestore();
export const auth = firebase.auth();

Vue.component("fa", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
