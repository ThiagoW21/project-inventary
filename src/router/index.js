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
  ],
});

router.beforeEach((to, from) => {
  const token = JSON.parse(localStorage.getItem("user"));
  axios
    .get("https://inventary-v1.herokuapp.com/me", {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    })
    .then(() => alert("Deu bom"))
    .catch((err) => alert(err));
});

export default router;
