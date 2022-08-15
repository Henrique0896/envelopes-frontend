import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import MoleculaCabecalho from "@/components/moleculas/molecula-cabecalho.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "HelloWorld",
    component: MoleculaCabecalho,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
