<script setup>
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import DropDownLoansVue from "../components/DropDownLoans.vue";
import ItemDetail from "../components/ItemDetail.vue";
import NavBar from "../components/NavBar.vue";

const store = useStore();
onMounted(async () => {
  await store.dispatch("getItens");
  await store.dispatch("getContribuitors");
});

const showModal = ref(false);
const itemDetail = ref();

const items = computed(() =>
  store.getters.items.map((item) => ({
    Patrimônio: item.code,
    Título: item.title,
    Categoria: item.category,
    borrowed: item.borrowed_to,
    values: item,
  }))
);

function showDetail(item) {
  itemDetail.value = item;
  showModal.value = true;
}

const fields = ref([
  "Patrimônio",
  "Título",
  "Categoria",
  "Emprestado",
  "Detalhes",
]);

const filterActive = ref(false);
const inputValue = ref("");
const selectedFilter = ref("");

function handleClick() {
  store.dispatch(filterActive.value ? "removeFilter" : "filterItems", {
    key: "title",
    value: inputValue.value,
  });
  filterActive.value = !filterActive.value;
  inputValue.value = "";
  selectedFilter.value = "";
}
</script>
<template>
  <NavBar />
  <div class="search-container">
    <span class="p-float-label p-input-icon-left">
      <i class="pi pi-search" />
      <InputText v-model="inputValue" id="inputtext" />
      <label for="inputtext">Digite o título do item</label>
    </span>

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
  <div>
    <b-table striped hover :items="items" :fields="fields">
      <template #cell(Emprestado)="row">
        <DropDownLoansVue
          :item="row.item.values"
          :borrowed="row.item.borrowed"
        />
      </template>
      <template #cell(Detalhes)="row">
        <Button
          type="button"
          label="Mostrar"
          @click="showDetail(row.item.values)"
          class="p-button-secondary"
        />
      </template>
    </b-table>
  </div>
  <ItemDetail
    :showModal="showModal"
    :item="itemDetail"
    @show-modal="showModal = false"
  />
</template>
<style scoped>
.form-select {
  height: 35px;
}
.search-container {
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}

.p-inputtext,
.p-float-label {
  display: flex;
  flex-grow: 4;
  margin-right: 20px;
}

table {
  width: 100%;
  text-align: center;
}

tr {
  width: 100%;
}

.p-button {
  vertical-align: unset;
}

h1 {
  margin-left: 25px;
  margin-top: 20px;
  font-size: 20px;
}
</style>
