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
      ],
    },
  ],
});

router.beforeEach(async (to) => {
  const token = JSON.parse(localStorage.getItem("user"));
  const url = "http://inventary-v1.herokuapp.com/me";

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
