<script setup>
import { computed } from "@vue/reactivity";
import { watch, onMounted } from "vue";
import { RouterView, useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
  const loggerUser = JSON.parse(localStorage.getItem("user"));
  store.dispatch("setUser", loggerUser);
});

const routerRedirect = useRouter();

const router = computed(() => store.getters.router);

const isLoading = computed(() => store.getters.isLoading);

watch(router, () => {
  routerRedirect.push({ name: router.value });
});
</script>
<template>
  <b-overlay :show="isLoading" rounded="sm">
    <RouterView />
  </b-overlay>
</template>

<style>
body,
html,
#app {
  height: 100%;
  width: 100%;
}
</style>
