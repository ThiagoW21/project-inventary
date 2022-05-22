<script setup>
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalTitle,
} from "mdb-vue-ui-kit";
import { ref } from "vue";
import CadastroUser from "../components/CadastroUser.vue";

const staticBackdrop = ref(false);
</script>
<template>
  <MDBBtn
    color="primary"
    aria-controls="staticBackdropLabel"
    @click="staticBackdrop = true"
  >
    Cadastrar
  </MDBBtn>
  <MDBModal
    id="staticBackdrop"
    tabindex="-1"
    labelledby="staticBackdropLabel"
    v-model="staticBackdrop"
    staticBackdrop
  >
    <MDBModalHeader>
      <MDBModalTitle id="staticBackdropLabel">Registre-se</MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody><CadastroUser /></MDBModalBody>
  </MDBModal>
</template>
<style scoped>
.modal-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  height: 700px;
  margin: 0px auto;
  padding-bottom: 60px;
}
</style>
