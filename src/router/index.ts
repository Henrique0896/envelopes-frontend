import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import PaginaPrincipal from "@/components/paginas/pagina-principal.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: PaginaPrincipal,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
