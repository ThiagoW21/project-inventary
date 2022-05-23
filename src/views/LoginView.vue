<script setup>
import { Form } from "vee-validate";
import { computed, onMounted, ref, watch } from "vue";
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

const isLoading = computed(() => store.getters.isLoading);
const inUsers = computed(() => store.getters.inUsers);

function onSubmit(values) {
  !inUsers.value && store.dispatch("authLogin", values);
}

const showModalWarning = ref(false);

watch(inUsers, () => {
  if (inUsers.value) {
    setTimeout(() => store.dispatch("setInUsers"), 1200);
  }
});
</script>
<template>
  <div id="login-container">
    <Transition name="slide-fade">
      <div v-if="inUsers" id="alert">
        <b-alert variant="danger" show> Usuário ou senha inválido </b-alert>
      </div>
    </Transition>
    <Form @submit="onSubmit" :validation-schema="schema">
      <div id="input-container">
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
      </div>
      <div id="buttons-container">
        <b-button type="submit" variant="primary">Entrar</b-button>
        <b-button @click="showModal = true" variant="link"
          >Cadastre-se</b-button
        >
        <b-button
          variant="secundary"
          type="button"
          @click="showModalWarning = true"
          ><img src="https://img.icons8.com/color/16/000000/google-logo.png" />
          Entrar com o google</b-button
        >
      </div>
    </Form>
  </div>
  <m-dialog v-model="showModal" title="Registre-se">
    <CadastroUser @show-modal="showModal = false">
      <template v-slot:footer>
        <b-button variant="secundary" @click="showModal = false">
          Cancelar
        </b-button>
        <b-overlay
          :show="isLoading"
          rounded
          opacity="0.6"
          spinner-small
          spinner-variant="primary"
          class="d-inline-block"
        >
          <b-button variant="primary" :disabled="isLoading" type="submit"
            >Cadastrar</b-button
          >
        </b-overlay>
      </template>
    </CadastroUser>
  </m-dialog>
  <m-dialog v-model="showModalWarning" title="Oops...">
    <p>Função em desenvolvimento.</p>
    <template v-slot:footer>
      <b-button
        variant="primary"
        @click="showModalWarning = false"
        type="submit"
        >Ok</b-button
      >
    </template>
  </m-dialog>
</template>
<style>
body {
  background-color: blue;
}

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

#login-container {
  width: 100%;
  height: 100vh;
  background-color: rgb(17, 17, 17);
  display: flex;
  justify-content: center;
  align-items: center;
}

#login-container form {
  background-color: white;
  width: 500px;
  padding: 50px;
  height: 400px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.m-dialog {
  width: 500px;
  border-radius: 10px;
}

#buttons-container {
  display: flex;
  flex-direction: column;
}

#buttons-container button {
  margin: 10px;
}

img {
  width: 20px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

#alert {
  position: absolute;
  top: 5%;
}
</style>
