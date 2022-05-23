import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state: {
    users: [],
    emailRegistered: false,
    isLoading: false,
    inUsers: false,
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
    emailRegistered(state) {
      return state.emailRegistered;
    },
    inUsers(state) {
      return state.inUsers;
    },
  },
  mutations: {
    ADD_USER(state, payload) {
      state.users = [...state.users, payload];
    },
    async GET_USERS(state, payload) {
      state.users = payload;
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
    SET_IN_USERS(state) {
      state.inUsers = !state.inUsers;
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
    authLogin({ commit, state }, payload) {
      const inUsers = state.users.some(
        ({ email, password }) =>
          email === payload.email && password === payload.password
      );
      if (!inUsers && commit("SET_IN_USERS"));
    },
    setInUsers({ commit }) {
      commit("SET_IN_USERS");
    },
    getUsers({ commit }) {
      axios
        .get("http://v1-inventary.herokuapp.com/users/")
        .then((res) => commit("GET_USERS", res.data));
    },
    removeAlert({ commit }) {
      commit("EMAIL_UNREGISTERED");
    },
  },
});

export default store;
