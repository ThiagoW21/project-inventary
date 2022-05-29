<script setup>
import axios from "axios";
import { useToast } from "bootstrap-vue-3";
import Button from "primevue/button";
import { Form, Field } from "vee-validate";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import * as Yup from "yup";
import DropDown from "../components/DropDown.vue";
import InputsCep from "../components/InputsCep.vue";
import NavBar from "../components/NavBar.vue";
import TextInput from "../components/TextInput.vue";

const store = useStore();
const toast = useToast();

const schema = Yup.object().shape({
  full_name: Yup.string().required(),
  gender: Yup.string().required(),
  data_nasc: Yup.date().required(),
  email: Yup.string().required().email(),
  tel: Yup.string().required(),
  office: Yup.string().required(),
  cep: Yup.string().required().min(6),
});

const colaborattor = computed(() => store.getters.colaborattor);
const cep = computed(() => store.getters.cep);

onMounted(() => {
  colaborattor.value.cep &&
    axios
      .get(`https://viacep.com.br/ws/${colaborattor.value.cep}/json/`)
      .then((res) => store.commit("SET_CEP", res.data))
      .catch(() => store.commit("RESET_FORM"));
});

async function onSubmit(values) {
  const url = "https://inventary-v1.herokuapp.com/contributors";

  store.commit("SET_LOADING");

  if (colaborattor.value.id) {
    await axios.put(url + `/${colaborattor.value.id}`, values);
  } else {
    await axios.post(url, values);
  }

  store.commit("SET_LOADING");

  toast.show({
    title: "Tudo certo!",
    body: "O produto foi registrado no banco de dados",
    delay: 3000,
  });
}

function resetForm() {
  store.commit("RESET_FORM");
}

const optionsGender = ref(["Masculino", "Feminino"]);
const optionsOffice = ref([
  "Analista de sistemas",
  "Desenvolvedor front-end",
  "Desenvolvedor back-end",
  "Desenvolvedor full-stack",
  "Ciêntista de dados",
  "Engenheiro de dados",
  "Gerente de projetos",
]);
</script>
<template>
  <nav-bar />
  <b-container
    :toast="{ root: true }"
    fluid="sm"
    position="position-absolute"
    style="top: 50px; left: -200px"
  ></b-container>
  <Form @submit="onSubmit" :validation-schema="schema">
    <div id="dados-principais">
      <h1>Dados pessoais</h1>
      <div class="input-container">
        <TextInput
          name="full_name"
          type="text"
          label="Nome completo:"
          :value="colaborattor && colaborattor.full_name"
          placeholder="Insira o nome do colaborador"
        />
        <TextInput
          name="data_nasc"
          type="text"
          :value="colaborattor && colaborattor.data_nasc"
          label="Data de nascimento:"
          placeholder="dia/mês/ano"
        />
        <DropDown
          name="gender"
          type="text"
          label="Gênero:"
          :value="colaborattor && colaborattor.gender"
          :options="optionsGender"
        />
      </div>
      <div class="input-container">
        <TextInput
          name="tel"
          type="text"
          label="Telefone:"
          :value="colaborattor && colaborattor.tel"
          placeholder="Telefone do colaborador"
        />
        <TextInput
          name="email"
          type="text"
          :value="colaborattor && colaborattor.email"
          label="Email:"
          placeholder="exemplo@exemplo.com"
        />
        <DropDown
          name="office"
          type="text"
          label="Cargo:"
          :value="colaborattor && colaborattor.office"
          :options="optionsOffice"
        />
      </div>
      <h1>Dados de endereço</h1>
      <div class="input-container">
        <TextInput
          name="cep"
          type="text"
          label="CEP:"
          :value="colaborattor && colaborattor.cep"
          placeholder="00000-000"
        />
        <InputsCep :value="cep.localidade" name="city" label="Cidade:" />
        <InputsCep :value="cep.uf" name="state" label="Estado:" />
      </div>
      <div class="input-container">
        <InputsCep
          :value="cep.logradouro"
          name="public_place"
          label="Logradouro:"
        />
        <TextInput
          name="number"
          type="text"
          label="Número:"
          :value="colaborattor && colaborattor.number"
        />
      </div>
      <div class="input-container">
        <InputsCep
          :value="cep.complemento"
          name="complement"
          label="Complemento:"
        />
        <InputsCep :value="cep.bairro" name="district" label="Bairro:" />
        <TextInput
          name="reference_point"
          type="text"
          label="Ponto de referência:"
          :value="colaborattor && colaborattor.reference_point"
        />
      </div>
      <div id="button-container">
        <Button
          label="Limpar"
          @click="resetForm"
          class="p-button-raised p-button-warning"
        />
        <Button
          label="Enviar"
          type="submit"
          class="p-button-raised p-button-success"
        />
      </div>
    </div>
  </Form>
</template>
<style scoped>
.mb-3,
h1 {
  width: auto;
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 5px;
}

.input-container {
  display: flex;
  width: 100%;
}

#fieldset-category,
#fieldset-code {
  width: 200px;
}

#fieldset-full_name,
#fieldset-city,
#fieldset-public_place,
#fieldset-complement,
#fieldset-district,
#fieldset-reference_point,
#fieldset-tel,
#fieldset-email,
#fieldset-office {
  display: flex;
  flex-direction: column;
  flex-grow: 4;
}

#dados-principais {
  display: flex;
  flex-direction: column;
  margin: 10px;
}

#button-container {
  display: flex;
  width: 100%;
  justify-content: flex-end;
}

#button-container button {
  margin-right: 15px;
}

.invalid-feedback {
  font-size: 10px;
}
</style>
