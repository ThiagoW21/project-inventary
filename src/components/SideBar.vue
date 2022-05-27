<script setup>
import { BIconList } from "bootstrap-icons-vue";
import { ref } from "vue";

const minimized = ref(false);
</script>

<template>
  <va-sidebar
    :minimized="minimized"
    textColor="dark"
    width="11rem"
    minimizedWidth="64px"
  >
    <button @click="minimized = !minimized">
      <b-icon-list />
    </button>
  </va-sidebar>
</template>
<style>
button {
  border: unset;
  background-color: unset;
  margin-top: 2vh;
}
svg {
  width: 100%;
  height: 40px;
  color: white;
}

.va-sidebar__menu {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(56, 56, 78);
}

#button-container {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  height: auto;
  width: 50%;
  height: 40px;
}
</style>
