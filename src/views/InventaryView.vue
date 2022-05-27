<script setup>
import SystemStatistics from "../components/SystemStatistics.vue";
import NavBar from "../components/NavBar.vue";
</script>
<template>
  <NavBar />
  <div id="view-container">
    <SystemStatistics />
  </div>
</template>
<style>
#view-container {
  overflow: auto;
  height: 100vh;
}
</style>
