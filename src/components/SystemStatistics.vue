<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const contribuitors = computed(() => store.getters.contribuitors.length);
const totalProducts = computed(() => store.getters.totalProducts);
const items = computed(() => store.getters.items.length);
const loans = computed(() => store.getters.getLoans);
</script>
<template>
  <h1>Estatísticas do sistema</h1>
  <div class="card-container">
    <div class="card">
      <div class="value-container">
        <va-icon name="person" size="4rem" :rotation="0" class="mr-3" />
        <h1>{{ contribuitors }}</h1>
      </div>
      <h2>Colaboradores</h2>
    </div>
    <div class="card">
      <div class="value-container">
        <va-icon name="widgets" size="4rem" :rotation="0" class="mr-3" />
        <h1>{{ items }}</h1>
      </div>
      <h2>Itens</h2>
    </div>
    <div class="card">
      <div class="value-container">
        <va-icon name="paid" size="4rem" :rotation="0" class="mr-3" />
        <h1>{{ totalProducts }}</h1>
      </div>
      <h2>Valor em produtos</h2>
    </div>
    <div class="card">
      <div class="value-container">
        <va-icon
          name="real_estate_agent"
          size="4rem"
          :rotation="0"
          class="mr-3"
        />
        <h1>{{ loans }}</h1>
      </div>
      <h2>Empréstimos</h2>
    </div>
  </div>
  <div id="teste"></div>
</template>
<style>
h2 {
  margin-top: 20px;
  text-align: center;
}

.card-container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

.container {
  width: 100%;
}

.value-container {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
}

h1 {
  margin-bottom: 10px;
  font-size: 20px;
}

.value-container h1 {
  display: flex;
  margin-bottom: 0px;
  font-size: 40px;
  align-items: center;
}

.card {
  border-radius: 10px;
  padding: 10px;
  display: flex;
  width: 200px;
  height: 130px;
  margin: 20px;
  flex-grow: 4;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>
