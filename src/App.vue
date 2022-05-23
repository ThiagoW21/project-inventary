<script setup>
import { RouterView } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
</script>
<template>
  <b-overlay :show="store.getters.isLoading()" rounded="sm">
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
