<script setup>
import { ref } from "vue";

const minimized = ref(false);

const items = [
  { title: "Dashboard", icon: "dashboard" },
  { title: "Sidebar demo", icon: "room", active: true },
  { title: "Loop", icon: "loop" },
];
</script>
<template>
  <div class="demo-content">
    <va-sidebar
      :minimized="minimized"
      textColor="dark"
      width="11rem"
      minimizedWidth="64px"
    >
      <va-checkbox v-model="minimized" label="Minimized" />
      <template v-for="item in items" :key="item.to">
        <va-sidebar-item :active="item.active">
          <va-sidebar-item-content>
            <va-icon :name="item.icon" />
            <va-sidebar-item-title v-if="!minimized" style="height: 24px">
              {{ item.title }}
            </va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>
      </template>
    </va-sidebar>
    <va-navbar>
      <template #left>
        <va-navbar-item>Left</va-navbar-item>
      </template>
      <template #center>
        <va-navbar-item>Center</va-navbar-item>
      </template>
      <template #right>
        <va-navbar-item>Right</va-navbar-item>
      </template>
    </va-navbar>
  </div>

  <div
    class="demo-controls px-2 py-2"
    style="background: var(--va-background); width: 100%"
  ></div>
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
