<script setup>
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { toRef } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  showModal: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["show-modal"]);

const itemDetail = toRef(props, "item");

const showModal = toRef(props, "showModal");
const router = useRouter();
const store = useStore();

function editItem() {
  store.commit("SET_ITEM", itemDetail);
  router.push({ name: "Cadastro de item" });
}
</script>
<template>
  <Dialog
    header="Detalhes"
    v-model:visible="showModal"
    :breakpoints="{ '960px': '75vw' }"
    :style="{ width: '40vw', heigth: '60vh' }"
  >
    <div>
      <label
        >Título:
        <InputText type="text" v-model="itemDetail.title" disabled />
      </label>
      <label
        >Código:
        <InputText type="text" v-model="itemDetail.code" disabled />
      </label>
      <label
        >Categoria:
        <InputText type="text" v-model="itemDetail.category" disabled />
      </label>
      <label
        >Marca:
        <InputText type="text" v-model="itemDetail.brand" disabled />
      </label>
      <label
        >Modelo:
        <InputText type="text" v-model="itemDetail.model" disabled />
      </label>
      <label
        >Descrição:
        <InputText type="text" v-model="itemDetail.description" disabled />
      </label>
      <label>
        URL imagem:
        <InputText type="text" v-model="itemDetail.url_image" disabled />
      </label>
      <label>
        Preço:
        <InputText type="text" v-model="itemDetail.price" disabled />
      </label>
    </div>
    <template #footer>
      <Button label="Cancelar" icon="pi pi-times" @click="emit('show-modal')" />

      <Button label="Editar" icon="pi pi-pencil" @click="editItem" autofocus />
    </template>
  </Dialog>
</template>
<style scoped>
.detail-dialog {
  display: flex;
}

.p-inputtext {
  display: flex;
  flex-grow: 4;
  margin-right: 20px;
}
</style>
