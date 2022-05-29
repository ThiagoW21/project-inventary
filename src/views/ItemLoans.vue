<script setup>
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import DropDownLoansVue from "../components/DropDownLoans.vue";
import NavBar from "../components/NavBar.vue";

const store = useStore();
onMounted(async () => {
  await store.dispatch("getItens");
  await store.dispatch("getContribuitors");
});

const items = computed(() =>
  store.getters.items.map((item) => ({
    Patrimônio: item.code,
    Título: item.title,
    Categoria: item.category,
    borrowed: item.borrowed_to,
    values: item,
  }))
);

const fields = ref(["Patrimônio", "Título", "Categoria", "Emprestado"]);
</script>
<template>
  <NavBar />
  <div class="search-container">
    <InputText placeholder="Digite o título do item" v-model="inputValue" />
    <Button type="button" label="Buscar" icon="pi pi-search" />
  </div>
  <div>
    <b-table striped hover :items="items" :fields="fields">
      <template #cell(Emprestado)="row">
        <DropDownLoansVue
          :item="row.item.values"
          :borrowed="row.item.borrowed"
        />
      </template>
    </b-table>
  </div>
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

.p-inputtext {
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

td {
  background-color: aqua;
  height: 60px;
  justify-content: center;
  display: flex;
  width: 100vw;
}
</style>
