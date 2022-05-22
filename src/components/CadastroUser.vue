<script setup>
import { Form } from "vee-validate";
import * as Yup from "yup";
import TextInput from "./TextInput.vue";

function onSubmit(values) {
  document.addEventListener("bvModalEvent", () => console.log("2"));
  alert(JSON.stringify(values, null, 2));
}

const schema = Yup.object().shape({
  name: Yup.string().required("Nome é um campo obrigatório"),
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
</script>

<template v-slot:modal-footer="{ ok }">
  <Form @submit="onSubmit" :validation-schema="schema">
    <TextInput
      name="name"
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
    <b-button type="submit" variant="primary">Cadastrar</b-button>
  </Form>
</template>
