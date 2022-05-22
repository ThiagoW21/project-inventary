import { createStore } from "vuex";

const store = createStore({
  state: {},
  getters: {},
  mutations: {
    submit() {
      console.log("a")
    },
  },
  actions: {
    submit({ commit }) {
      commit("submit");
    },
  },
});

export default store;
