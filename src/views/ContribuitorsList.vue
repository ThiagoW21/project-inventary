<script setup>
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import CardColaborattor from "../components/CardColaborattor.vue";
import ColaborattorDetail from "../components/ColaborattorDetail.vue";
import NavBar from "../components/NavBar.vue";

const store = useStore();
onMounted(async () => {
  await store.dispatch("getContribuitors");
});

const contribuitors = computed(() => store.getters.contribuitors);

const showModal = ref(false);
const contribuitorDetail = ref();

const filterActive = ref(false);
const inputValue = ref("");
const selectedFilter = ref("");

function showDetail(item) {
  contribuitorDetail.value = item;
  showModal.value = true;
}

function handleClick() {
  store.dispatch(filterActive.value ? "removeFilter" : "filterContribuitors", {
    key: "full_name",
    value: inputValue.value,
  });
  filterActive.value = !filterActive.value;
  inputValue.value = "";
  selectedFilter.value = "";
}
</script>
<template>
  <NavBar />
  <div id="view-container">
    <div class="search-container">
      <span class="p-float-label p-input-icon-left">
        <i class="pi pi-search" />
        <InputText v-model="inputValue" id="inputtext" />
        <label for="inputtext">Digite o nome do colaborador</label>
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
    <div class="cards-container">
      <CardColaborattor
        v-for="colab in contribuitors"
        @show-detail="showDetail(colab)"
        :name="colab.full_name"
        :email="colab.email"
        :tel="colab.tel"
        :office="colab.office"
        :key="colab.id"
      />
    </div>
    <ColaborattorDetail
      :showModal="showModal"
      :contribuitor="contribuitorDetail"
      @show-modal="showModal = false"
    />
  </div>
</template>
<style scoped>
.search-container {
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}

.cards-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

#view-container {
  overflow: auto;
  padding-bottom: 100px;
  height: 100%;
}
.p-inputtext,
.p-float-label {
  display: flex;
  flex-grow: 4;
  margin-right: 20px;
}
</style>
