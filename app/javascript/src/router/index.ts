import VueRouter, { RouteConfig } from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [];

export default new VueRouter({
  mode: "history",
  routes,
});
