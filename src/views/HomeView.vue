<script setup>
import SideBar from "../components/SideBar.vue";
import NavBar from "../components/NavBar.vue";
</script>
<template>
  <div class="demo-content">
    <SideBar />
    <NavBar />
  </div>
</template>
<style>
html,
body {
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.demo-content,
.b-overlay-wrap {
  height: 100%;
}

.demo-content {
  display: flex;
  width: 100%;
  flex-grow: 4;
}

.va-navbar {
  display: flex;
  flex-grow: 4;
}
</style>
