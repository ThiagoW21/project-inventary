<script setup>
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import CardItem from "../components/CardItem.vue";
import ItemDetail from "../components/ItemDetail.vue";
import NavBar from "../components/NavBar.vue";
import SystemStatistics from "../components/SystemStatistics.vue";

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

const showModal = ref(false);
const itemDetail = ref();

function showDetail(item) {
  itemDetail.value = item;
  showModal.value = true;
}

onMounted(async () => {
  await store.dispatch("getItens");
  await store.dispatch("getContribuitors");
  store.dispatch("getLoans");
});
</script>
<template>
  <NavBar />
  <div id="view-container">
    <div class="container">
      <SystemStatistics />
      <div class="search-container">
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
          :title="item.title"
          :url="item.url_image"
          :brand="item.brand"
          :model="item.model"
          :borrowed_to="item.borrowed_to"
          @show-detail="showDetail(item)"
        />
      </div>
    </div>
    <ItemDetail
      :showModal="showModal"
      :item="itemDetail"
      @show-modal="showModal = false"
    />
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

.detail-dialog {
  display: flex;
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

.search-container {
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
