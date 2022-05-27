<script setup>
import { BIconList } from "bootstrap-icons-vue";
import Button from "primevue/button";
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";

const minimized = ref(false);
const router = useRouter();

function handleClick() {
  localStorage.removeItem("user");
  router.push({ name: "login" });
}
</script>

<template>
  <va-sidebar
    :minimized="minimized"
    textColor="dark"
    width="11rem"
    minimizedWidth="64px"
  >
    <button id="button-show" @click="minimized = !minimized">
      <b-icon-list />
    </button>
    <div id="buttons-nav-container">
      <div class="generic-label">
        <p v-if="!minimized">Geral</p>
        <RouterLink to="/inventario">
          <Button
            :label="!minimized && 'Inventário'"
            class="p-button-outlined p-button-secondary"
            icon="pi pi-plus"
          />
        </RouterLink>
        <Button
          :label="!minimized && 'Sair'"
          class="p-button-outlined p-button-secondary"
          icon="pi pi-sign-out"
          @click="handleClick"
        />
      </div>
      <div class="generic-label">
        <p v-if="!minimized">Colaboradores</p>
        <RouterLink to="/colaboradores/cadastrar">
          <Button
            :label="!minimized && 'Cadastrar'"
            class="p-button-outlined p-button-secondary"
            icon="pi pi-plus"
          />
        </RouterLink>
        <RouterLink to="/colaboradores">
          <Button
            :label="!minimized && 'Listar'"
            class="p-button-outlined p-button-secondary"
            icon="pi pi-list"
          />
        </RouterLink>
      </div>
      <div class="generic-label">
        <p v-if="!minimized">Produtos</p>
        <RouterLink to="/produtos/cadastrar">
          <Button
            :label="!minimized && 'Cadastrar'"
            class="p-button-outlined p-button-secondary"
            icon="pi pi-plus"
          />
        </RouterLink>
        <RouterLink to="/emprestimos">
          <Button
            :label="!minimized && 'Empréstimos'"
            class="p-button-outlined p-button-secondary emprestimo"
            icon="pi pi-share-alt"
          />
        </RouterLink>
      </div>
    </div>
  </va-sidebar>
</template>
<style>
p,
.p-button-outlined {
  margin-bottom: 5px;
  width: 100%;
}

.generic-label {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 10px;
}

.emprestimo {
  font-size: 12px;
}

#button-show {
  border: unset;
  background-color: unset;
  margin-top: 2vh;
}

#buttons-nav-container {
  display: flex;
  width: 100%;
  align-items: center;
  height: 100%;
  justify-content: center;
  flex-direction: column;
}

.button-nav {
  display: flex;
  width: 100%;
  justify-content: center;
}

.p-button-label,
.p-button-icon,
.generic-label {
  color: white;
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
</style>
