<script setup>
import { Form } from "vee-validate";
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import * as Yup from "yup";
import CadastroUser from "../components/CadastroUser.vue";
import TextInput from "../components/TextInput.vue";

const store = useStore();

const showModal = ref(false);

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Email inválido")
    .required("Email é um campo obrigatório"),
  password: Yup.string().required("Senha é um campo obrigatório"),
});

const isLoading = computed(() => store.getters.isLoading);
const inUsers = computed(() => store.getters.inUsers);

function onSubmit(values, { resetForm }) {
  !inUsers.value && store.dispatch("authLogin", values);
  resetForm();
}

const showModalWarning = ref(false);

watch(inUsers, () => {
  if (inUsers.value) {
    setTimeout(() => store.dispatch("setInUsers"), 1200);
  }
});
</script>
<template>
  <div class="bg-image"></div>
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
        <b-overlay
          :show="isLoading"
          rounded
          opacity="0.6"
          spinner-small
          spinner-variant="primary"
          class="d-inline-block"
          ><b-button type="submit" variant="primary">Entrar</b-button>
        </b-overlay>
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
    <CadastroUser @show-modal="() => (showModal = false)">
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
body,
html {
  width: 100%;
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  box-shadow: 0 0 1em rgb(175, 170, 255);
}

@media only screen and (max-width: 600px) {
  #login-container form {
    max-width: 350px;
  }
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
  align-items: center;
}

#buttons-container button,
#buttons-container .b-overlay-wrap {
  width: 100%;
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
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
}

.bg-image {
  background-image: url(../assets/background-image.png);
  filter: blur(8px);
  -webkit-filter: blur(20px);
  height: 100vh;
  width: 100%;
}
</style>
