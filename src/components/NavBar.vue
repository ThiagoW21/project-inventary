<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <va-navbar color="rgb(56, 56, 78)">
    <template #left>
      <va-navbar-item>{{ route.name.toUpperCase() }}</va-navbar-item>
    </template>
    <template #right>
      <va-navbar-item>Right</va-navbar-item>
    </template>
  </va-navbar>
</template>
