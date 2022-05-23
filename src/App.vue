<script setup>
import { computed } from "@vue/reactivity";
import { RouterView } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const isLoading = computed(() => store.getters.isLoading);
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
