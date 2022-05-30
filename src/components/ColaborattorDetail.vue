<script setup>
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import { toRef } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const props = defineProps({
  contribuitor: {
    type: Object,
    required: true,
  },
  showModal: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["show-modal"]);

const contribuitor = toRef(props, "contribuitor");

const showModal = toRef(props, "showModal");
const router = useRouter();
const store = useStore();

function editColaborattor() {
  store.commit("SET_COLABORATTOR", contribuitor);
  router.push({ name: "Cadastro de colaboradores" });
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
        >Nome completo:
        <InputText type="text" v-model="contribuitor.full_name" disabled />
      </label>
      <label
        >Código:
        <InputText type="text" v-model="contribuitor.email" disabled />
      </label>
      <label
        >Gênero:
        <InputText type="text" v-model="contribuitor.gender" disabled />
      </label>
      <label
        >Cargo:
        <InputText type="text" v-model="contribuitor.office" disabled />
      </label>
      <label
        >Telefone:
        <InputText type="text" v-model="contribuitor.tel" disabled />
      </label>
      <label
        >Cidade:
        <InputText type="text" v-model="contribuitor.city" disabled />
      </label>
      <label
        >Estado:
        <InputText type="text" v-model="contribuitor.state" disabled />
      </label>
      <label>
        CEP:
        <InputText type="text" v-model="contribuitor.cep" disabled />
      </label>
      <label>
        Rua:
        <InputText type="text" v-model="contribuitor.district" disabled />
      </label>
      <label>
        Ponto de referência:
        <InputText
          type="text"
          v-model="contribuitor.reference_point"
          disabled
        />
      </label>
      <label>
        Logradouro:
        <InputText type="text" v-model="contribuitor.public_place" disabled />
      </label>
      <label>
        Complemento:
        <InputText type="text" v-model="contribuitor.complement" disabled />
      </label>
    </div>
    <template #footer>
      <Button label="Cancelar" icon="pi pi-times" @click="emit('show-modal')" />

      <Button
        label="Editar"
        icon="pi pi-pencil"
        @click="editColaborattor"
        autofocus
      />
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
