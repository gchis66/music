import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VeeValidatePlugin from "./includes/validation";
import { auth } from "./includes/firebase";
import Icon from "./directives/icon";
<<<<<<< HEAD
import i18n from "./includes/i18n";
import { registerSW } from "virtual:pwa-register";
=======
>>>>>>> parent of 04fa801 (Internationalization)
import "./assets/base.css";
import "./assets/main.css";

registerSW({ immediate: true });

let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    app.use(createPinia());
    app.use(router);
    app.use(VeeValidatePlugin);
    app.directive("icon", Icon);

    app.mount("#app");
  }
});
