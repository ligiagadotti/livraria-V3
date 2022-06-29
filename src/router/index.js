import { createRouter, createWebHistory } from "vue-router";
import LivrosView from "../views/LivrosView.vue";
import CategoriasView from "../views/CategoriasView.vue";
import EditorasView from "../views/EditorasView.vue";
import AutoresView from "../views/AutoresView.vue";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "livros",
      component: LivrosView,
    },
    {
      path: "/categorias",
      name: "categorias",
      component: CategoriasView,
    },
    {
      path: "/editoras",
      name: "editoras",
      component: EditorasView,
    },
    {
      path: "/autores",
      name: "autores",
      component: AutoresView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
  ],
});

export default router;
