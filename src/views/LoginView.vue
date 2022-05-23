<script setup>
import { Form } from "vee-validate";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import * as Yup from "yup";
import CadastroUser from "../components/CadastroUser.vue";
import TextInput from "../components/TextInput.vue";

const store = useStore();

onMounted(() => {
  store.dispatch("getUsers");
});

const showModal = ref(false);

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
  <b-button @click="showModal = true" variant="primary">Cadastrar</b-button>
  <m-dialog v-model="showModal" title="Registre-se">
    <CadastroUser @show-modal="showModal = false">
      <template v-slot:footer>
        <button class="m-dialog--cancel-btn" @click="showModal = false">
          Cancelar
        </button>
        <b-overlay
          :show="store.getters.isLoading()"
          rounded
          opacity="0.6"
          spinner-small
          spinner-variant="primary"
          class="d-inline-block"
        >
          <b-button
            variant="primary"
            :disabled="store.getters.isLoading()"
            type="submit"
            >Cadastrar</b-button
          >
        </b-overlay>
      </template>
    </CadastroUser>
  </m-dialog>
</template>
<style>
.modal-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  height: 700px;
  margin: 0px auto;
  padding-bottom: 60px;
}

.invalid-feedback {
  font-size: 12px;
}
</style>
