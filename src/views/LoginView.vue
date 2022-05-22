<script setup>
import {
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalTitle,
} from "mdb-vue-ui-kit";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import CadastroUser from "../components/CadastroUser.vue";
import TextInput from "../components/TextInput.vue";
import { Form } from "vee-validate";
import * as Yup from "yup";

const store = useStore();

onMounted(() => {
  store.dispatch("getUsers");
});

const staticBackdrop = ref(false);

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Email inválido")
    .required("Email é um campo obrigatório"),
  password: Yup.string().required("Senha é um campo obrigatório"),
});

const loginError = ref(true);

function onSubmit(values) {
  loginError.value = store.getters.authLogin(values);
  setInterval(() => {
    loginError.value = true;
  }, 3000);
}
</script>
<template>
  <div>
    <Form @submit="onSubmit" :validation-schema="schema">
      <TextInput
        name="email"
        type="email"
        label="E-mail"
        placeholder="Seu endereço de email"
      />
      <TextInput
        name="password"
        type="password"
        label="Senha"
        placeholder="Digite uma senha"
      />
      <p v-if="!loginError">Usuário ou senha inválido</p>
      <b-button type="submit" variant="primary">Entrar</b-button>
    </Form>
  </div>
  <b-button @click="staticBackdrop = true" variant="primary"
    >Cadastrar</b-button
  >
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
