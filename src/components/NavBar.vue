<script setup>
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const store = useStore();

const loggerUser = computed(() => store.getters.loggerUser);
</script>

<template>
  <va-navbar color="rgb(56, 56, 78)">
    <template #left>
      <va-navbar-item>{{ route.name.toUpperCase() }}</va-navbar-item>
    </template>
    <template #right>
      <va-navbar-item>
        <p>{{ loggerUser.user.username }}</p>
      </va-navbar-item>
      <va-navbar-item>
        <vue-gravatar :email="loggerUser.email" :size="50" />
      </va-navbar-item>
    </template>
  </va-navbar>
</template>
<style>
.va-navbar__item img {
  border-radius: 50%;
  overflow: hidden;
}
</style>
