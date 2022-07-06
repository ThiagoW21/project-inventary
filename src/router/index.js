import axios from "axios";
import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/home/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      children: [
        {
          path: "/home/inventario",
          name: "inventario",
          component: () => import("../views/InventaryView.vue"),
        },
        {
          path: "/home/items/cadastro",
          name: "Cadastro de item",
          component: () => import("../views/CadastroItemView.vue"),
        },
        {
          path: "/home/items/emprestimo",
          name: "Emprestimo de itens",
          component: () => import("../views/ItemLoans.vue"),
        },
        {
          path: "/home/contribuitors/cadastro",
          name: "Cadastro de colaboradores",
          component: () => import("../views/RegisterColaborattor.vue"),
        },
        {
          path: "/home/contribuitors/listar",
          name: "Listagem de colaboradores",
          component: () => import("../views/ContribuitorsList.vue"),
        },
      ],
    },
  ],
});

router.beforeEach(async (to) => {
  const token = JSON.parse(localStorage.getItem("user"));
  const url = "https://inventary-v1.herokuapp.com/me";

  if (token) {
    const config = {
      headers: { Authorization: "Bearer " + token.access_token },
    };

    const isAuth = await axios.get(url, config).catch(() => {
      return false;
    });

    if (!isAuth && to.name !== "login") {
      return { name: "login" };
    }
  } else if (to.name !== "login") {
    return { name: "login" };
  }
});

export default router;
