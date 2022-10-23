import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";

import VueCompositionAPI from "@vue/composition-api";
import router from "../src/router";
import store from "../src/store";
import App from "../App.vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueCompositionAPI);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);

document.addEventListener("DOMContentLoaded", () => {
  const config = document.querySelector<HTMLDivElement>(
    "script[name=config]"
  )?.dataset;

  if (!config) throw new Error("Failed to Load Config");

  const firebaseConfig = config.firebase && JSON.parse(config.firebase);

  if (!firebaseConfig) throw new Error("Failed to Load Firebase Config");

  new Vue({
    components: { App },
    template: "<App/>",
    render: (h) => h(App),
    store,
    router,
  }).$mount("#app");
});
