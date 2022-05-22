<script setup>
import { MDBBtn, MDBModalFooter } from "mdb-vue-ui-kit";
import { Form } from "vee-validate";
import { useStore } from "vuex";
import * as Yup from "yup";
import TextInput from "./TextInput.vue";

const schema = Yup.object().shape({
  username: Yup.string().required("Nome é um campo obrigatório"),
  email: Yup.string()
    .email("Email inválido")
    .required("Email é um campo obrigatório"),
  password: Yup.string()
    .min(8, "A senha deve conter pelo menos 8 caracteres")
    .required("Senha é um campo obrigatório"),
  confirm_password: Yup.string()
    .required("Confirmar a senha é um campo obrigatório")
    .oneOf([Yup.ref("password")], "As senhas não coincidem"),
});

const store = useStore();
function onSubmit(values) {
  console.log(values);
  store.dispatch("addUser", values);
}
</script>

<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <TextInput
      name="username"
      type="text"
      label="Nome completo"
      placeholder="Seu nome"
    />
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
    <TextInput
      name="confirm_password"
      type="password"
      label="Confirmar senha"
      placeholder="Digite novamente"
    />
    <MDBModalFooter>
      <MDBBtn
        tag="input"
        color="primary"
        type="submit"
        value="Cadastrar"
      ></MDBBtn>
    </MDBModalFooter>
  </Form>
</template>
