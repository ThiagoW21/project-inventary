<script setup>
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import NavBar from "../components/NavBar.vue";
import SystemStatistics from "../components/SystemStatistics.vue";
import CardItem from "../components/CardItem.vue";

const store = useStore();
const items = computed(() => store.getters.items);
const filters = ref([
  { name: "Nome", key: "name" },
  { name: "Marca", key: "brand" },
  { name: "Modelo", key: "model" },
  { name: "Descrição", key: "description" },
]);

const selectedFilter = ref("");
const inputValue = ref("");
const filterActive = ref(false);

function handleClick() {
  store.dispatch(filterActive.value ? "removeFilter" : "filterItems", {
    key: selectedFilter.value,
    value: inputValue.value,
  });
  filterActive.value = !filterActive.value;
  inputValue.value = "";
  selectedFilter.value = "";
}

function showDetail(item) {
  console.log(item);
}

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
        <InputText placeholder="Buscar item" v-model="inputValue" />
        <Dropdown
          v-model="selectedFilter"
          :options="filters"
          placeholder="Selecione um filtro"
          optionLabel="name"
          optionValue="key"
        />
        <Button
          v-if="filterActive"
          label="Remover filtro"
          icon="pi pi-trash"
          class="p-button-danger"
          @click="handleClick"
        />
        <Button
          v-else
          type="button"
          label="Buscar"
          icon="pi pi-search"
          @click="handleClick"
        />
      </div>
      <div id="itens-container">
        <CardItem
          v-for="item in items"
          :key="item.id"
          :url="item.url_image"
          :description="item.description"
          :brand="item.brand"
          :model="item.model"
          :borrowed_to="item.borrowed_to"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.status {
  border-radius: 4px;
  background-color: #46b968;
  height: 30px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.card p {
  color: gray;
}

.borrowed {
  background-color: #f9a825;
}

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

.p-dropdown {
  margin-right: 20px;
  width: 200px;
}
</style>
