<script setup>
import axios from "axios";
import { useToast } from "bootstrap-vue-3";
import Button from "primevue/button";
import { Form } from "vee-validate";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import * as Yup from "yup";
import DropDown from "../components/DropDown.vue";
import TextArea from "../components/TextArea.vue";
import TextInput from "../components/TextInput.vue";

const store = useStore();
const toast = useToast();

const schema = Yup.object().shape({
  title: Yup.string().required("Título é um campo obrigatório"),
  category: Yup.string().required("Categoria é um campo obrigatório"),
  url_image: Yup.string().required("URL é um campo obrigatório"),
  model: Yup.string().required("Modelo é um campo obrigatório"),
  brand: Yup.string().required("Marca é um campo obrigatório"),
  description: Yup.string().required("Marca é um campo obrigatório"),
  code: Yup.string()
    .required("Código é um campo obrigatório")
    .min(6, "O código precisa ter pelo menos 6 dígitos"),
  price: Yup.string().required("Preço um campo obrigatório"),
});

const item = ref();
const reset = ref(false);

const params = useRoute();

function resetForm() {
  reset.value = !reset.value;
  store.commit("RESET_FORM");
  item.value = {};
}

onMounted(async () => {
  if (params.params.id) {
    const url = `https://inventary-v1.herokuapp.com/items/${params.params.id}`;
    await axios.get(url).then((res) => (item.value = res.data.Item));
  }
});

async function onSubmit(values) {
  const url = "https://inventary-v1.herokuapp.com/items";

  store.commit("SET_LOADING");

  if (params.params.id) {
    await axios.put(url + `/${item.value.id}`, values);
  } else {
    await axios.post(url, values);
  }

  store.commit("SET_LOADING");

  resetForm();

  toast.show({
    title: "Tudo certo!",
    body: "O produto foi registrado no banco de dados",
    delay: 3000,
  });
}

const options = ref([
  "Notebook",
  "Computadores",
  "Periféricos",
  "Peças",
  "Escritório",
]);
</script>
<template>
  <b-container
    :toast="{ root: true }"
    fluid="sm"
    position="position-absolute"
    style="top: 50px; left: -200px"
  ></b-container>
  <Form @submit="onSubmit" :validation-schema="schema">
    <div id="dados-principais">
      <h1>Dados principais</h1>
      <div class="input-container">
        <TextInput
          name="code"
          type="number"
          :value="item && item.code"
          label="Código:"
          placeholder="Código do produto"
        />
        <TextInput
          name="title"
          type="text"
          label="Título:"
          :value="item && item.title"
          placeholder="Título do produto"
        />
        <DropDown
          name="category"
          type="text"
          label="Categoria:"
          :value="item && item.category"
          :options="options"
          placeholder="Categoria do produto"
          :reset="reset"
        />
      </div>
      <h1>Dados complementares</h1>
      <div class="input-container">
        <TextInput
          name="price"
          type="text"
          label="Preço:"
          :value="item && item.price"
          placeholder="Preço do produto"
        />
        <TextInput
          name="url_image"
          type="text"
          label="URL da imagem:"
          :value="item && item.url_image"
          placeholder="URL da imagem do produto"
        />
      </div>
      <div class="input-container">
        <TextInput
          name="brand"
          type="text"
          label="Marca:"
          :value="item && item.brand"
          placeholder="Marca do produto"
        />
        <TextInput
          name="model"
          type="text"
          label="Modelo:"
          :value="item && item.model"
          placeholder="Modelo do produto"
        />
      </div>
      <TextArea
        name="description"
        label="Descrição:"
        :value="item && item.description"
        placeholder="Descrição do produto"
      />
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
  margin-top: 5px;
  display: flex;
  width: 100%;
}

#fieldset-category,
#fieldset-code,
#fieldset-price {
  width: 200px;
}

#fieldset-title,
#fieldset-url_image,
#fieldset-brand,
#fieldset-model {
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
