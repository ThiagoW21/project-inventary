<script setup>
import SideBar from "../components/SideBar.vue";
import NavBar from "../components/NavBar.vue";
import { RouterView } from "vue-router";
</script>
<template>
  <div class="demo-content">
    <SideBar />
    <div class="view-content">
      <NavBar />
      <RouterView />
    </div>
  </div>
</template>
<style>
html,
body {
  width: 100%;
  height: 100%;
}

.demo-content,
.b-overlay-wrap {
  height: 100%;
  overflow: hidden;
}

.demo-content {
  display: flex;
  width: 100%;
}

.view-content {
  width: 100%;
}

.va-navbar {
  display: flex;
  flex-grow: 4;
}
</style>
