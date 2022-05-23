import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state: {
    users: [],
    emailRegistered: false,
    isLoading: false,
  },
  getters: {
    authLogin: (state) => (payload) => {
      const inUsers = state.users.some(
        ({ email, password }) =>
          email === payload.email && password === payload.password
      );
      return inUsers;
    },
    isLoading: (state) => () => {
      return state.isLoading;
    },
    emailRegistered: (state) => () => {
      return state.emailRegistered;
    },
  },
  mutations: {
    ADD_USER(state, payload) {
      state.users = [...state.users, payload];
    },
    async GET_USERS(state) {
      axios
        .get("http://v1-inventary.herokuapp.com/users/")
        .then((res) => (state.users = res.data));
    },
    EMAIL_REGISTERED(state) {
      state.emailRegistered = true;
    },
    EMAIL_UNREGISTERED(state) {
      state.emailRegistered = false;
    },
    SET_LOADING(state) {
      state.isLoading = !state.isLoading;
    },
  },
  actions: {
    async addUser({ commit, state }, payload) {
      delete payload["confirm_password"];
      payload["id"] = state.users.length;
      commit("SET_LOADING");
      await axios
        .post("http://v1-inventary.herokuapp.com/users/", payload)
        .then((res) => commit("ADD_USER", res.data))
        .then(() => commit("EMAIL_UNREGISTERED"))
        .catch(() => commit("EMAIL_REGISTERED"));
      commit("SET_LOADING");
    },
    getUsers({ commit }) {
      commit("GET_USERS");
    },
    removeAlert({ commit }) {
      commit("EMAIL_UNREGISTERED");
    },
  },
});

export default store;
