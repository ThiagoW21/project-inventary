<script setup>
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import NavBar from "../components/NavBar.vue";
import SystemStatistics from "../components/SystemStatistics.vue";

const store = useStore();
const items = computed(() => store.getters.items);

onMounted(() => {
  store.dispatch("getItens");
});
</script>
<template>
  <NavBar />
  <div id="view-container">
    <div class="container">
      <SystemStatistics />
      <div id="search-container">
        <InputText placeholder="Buscar" />
        <Button type="button" label="Search" icon="pi pi-search" />
      </div>
      <div id="itens-container">
        <div v-for="item in items" :key="item.id" class="card">
          <img :src="item.url_image" />
          <h3>{{ item.description }}</h3>
          <div class="brand-model-container">
            <p>{{ item.brand }}</p>
            <h1>{{ item.model }}</h1>
          </div>
          <div class="status">{{ item.borrowed_to }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#itens-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.brand-model-container {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}
.card img {
  height: 50%;
  width: 100%;
}

.card {
  height: 350px;
  width: 240px;
  flex-grow: unset;
  margin: 19px;
  transition: 0.2s;
}

.card:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

#view-container {
  overflow: auto;
  padding-bottom: 100px;
  height: 100%;
}

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#search-container {
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}

.p-inputtext {
  display: flex;
  flex-grow: 4;
  margin-right: 20px;
}
</style>
