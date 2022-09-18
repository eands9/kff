import { createApp, watch } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VeeValidatePlugin from "./includes/validation.js";
import { auth } from "./includes/firebase";

import "./assets/base.css";
import "./assets/main.css";

let app;


const pinia = createPinia();

// if an Array.push does not work, it's because there's a local storage item that needs to be removed when the state structure is changed
// localStorage.removeItem("cartState");
if (localStorage.getItem("cartState")) {
  pinia.state.value.cartStore = JSON.parse(localStorage.getItem("cartState"));
}

watch(
  () => pinia.state.value.cartStore,
  (state) => {
    localStorage.setItem("cartState", JSON.stringify(state));
  },
  {
    deep: true,
  }
);

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    app.use(pinia);
    app.use(router);
    app.use(VeeValidatePlugin);

    app.mount("#app");
  }
});
