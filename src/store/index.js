import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {},
    emailRegistered: false,
    isLoading: false,
    inUsers: false,
    router: "/",
    contributors: [],
    totalProducts: 0,
    items: [],
    backupItems: [],
    borrowedItems: [],
    item: {},
    resetForm: false,
    contribuitorsName: [],
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
    router(state) {
      return state.router;
    },
    loggerUser(state) {
      return state.user;
    },
    contribuitors(state) {
      return state.contributors;
    },
    totalProducts(state) {
      return state.items.reduce((acc, product) => acc + product.price, 0);
    },
    items(state) {
      return state.items;
    },
    borrowedItems(state) {
      return state.borrowedItems;
    },
    item(state) {
      return state.item;
    },
    resetForm(state) {
      return state.resetForm;
    },
    contribuitorsName(state) {
      return [...state.contribuitorsName, "Na empresa"];
    },
  },
  mutations: {
    LOGGED_USER(state, payload) {
      state.user = payload;
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
    UPDATE_ROUTER(state, payload) {
      state.router = payload;
    },
    ADD_ITEMS(state, payload) {
      state.items = payload;
    },
    SET_BACKUP(state, payload) {
      state.backupItems = payload;
    },
    REMOVE_FILTER(state) {
      state.items = state.backupItems;
    },
    SET_ITEM(state, payload) {
      state.item = payload;
    },
    RESET_FORM(state) {
      state.resetForm = !state.resetForm;
      state.item = false;
    },
    SET_CONTRIBUITORS(state, payload) {
      state.contributors = payload;
    },
    SET_CONTRIBUITORS_NAMES(state, payload) {
      state.contribuitorsName = payload;
    },
  },
  actions: {
    async addUser({ commit }, payload) {
      delete payload["confirm_password"];
      commit("SET_LOADING");
      await axios
        .post("http://inventary-v1.herokuapp.com/users", payload)
        .then((res) => commit("ADD_USER", res.data))
        .then(() => commit("EMAIL_UNREGISTERED"))
        .catch(() => commit("EMAIL_REGISTERED"));
      commit("SET_LOADING");
    },
    async authLogin({ commit }, payload) {
      commit("SET_LOADING");
      await axios
        .post("http://inventary-v1.herokuapp.com/token", payload)
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data));
          commit("LOGGED_USER", res.data);
          commit("UPDATE_ROUTER", "inventario");
        })
        .catch(() => commit("SET_IN_USERS"));
      commit("SET_LOADING");
    },
    setInUsers({ commit }) {
      commit("SET_IN_USERS");
    },
    removeAlert({ commit }) {
      commit("EMAIL_UNREGISTERED");
    },
    setUser({ commit }, payload) {
      commit("LOGGED_USER", payload);
    },
    async getItens({ commit }) {
      commit("SET_LOADING");
      const url = "http://inventary-v1.herokuapp.com/items";
      await axios.get(url).then((res) => {
        commit("ADD_ITEMS", res.data);
        commit("SET_BACKUP", res.data);
      });
      commit("SET_LOADING");
    },
    filterItems({ commit, state }, { key, value }) {
      const itemsFiltered = state.items.filter((item) =>
        item[key].toLowerCase().includes(value.toLowerCase())
      );
      commit("ADD_ITEMS", itemsFiltered);
    },
    removeFilter({ commit }) {
      commit("REMOVE_FILTER");
    },
    async getContribuitors({ commit }) {
      commit("SET_LOADING");
      const url = "https://inventary-v1.herokuapp.com/contributors";
      await axios.get(url).then((res) => {
        commit("SET_CONTRIBUITORS", res.data);
        const contribuitorsNames = res.data.map((obj) => obj.full_name);
        commit("SET_CONTRIBUITORS_NAMES", contribuitorsNames);
      });
      commit("SET_LOADING");
    },
  },
});

export default store;
