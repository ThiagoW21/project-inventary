import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state: {
    users: [],
  },
  getters: {
    authLogin: (state) => (payload) => {
      const inUsers = state.users.some(
        ({ email, password }) =>
          email === payload.email && password === payload.password
      );
      return inUsers;
    },
  },
  mutations: {
    addUser(state, payload) {
      delete payload["confirm_password"];
      payload["id"] = state.users.length;
      axios
        .post("http://v1-inventary.herokuapp.com/users/", payload)
        .then((res) => (state.users = [...state.users, res.data]));
    },
    async getUsers(state) {
      axios
        .get("http://v1-inventary.herokuapp.com/users/")
        .then((res) => (state.users = res.data));
    },
  },
  actions: {
    addUser({ commit }, payload) {
      commit("addUser", payload);
    },
    getUsers({ commit }) {
      commit("getUsers");
    },
  },
});

export default store;
