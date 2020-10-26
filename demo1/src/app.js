import Vue from "vue";
import App from "./App.vue";
import { createRouter } from "./router";
const router = createRouter();
export function createApp() {
  const app = new Vue({
    router,
    render: (h) => h(App),
  });
  return { app, router };
}
