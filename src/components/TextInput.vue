<script setup>
import axios from "axios";
import { useField } from "vee-validate";
import { computed, toRef, watch } from "vue";
import { useStore } from "vuex";

const props = defineProps({
  type: {
    type: String,
  },
  value: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
  },
  disabled: {
    type: Boolean,
    required: false,
  },
});

const store = useStore();
const name = toRef(props, "name");
const reset = computed(() => store.getters.resetForm);

const { value: inputValue, errorMessage } = useField(name, undefined, {
  initialValue: props.value,
});

watch(reset, () => {
  inputValue.value = "";
});

function searchCep() {
  if (name.value === "cep" && inputValue.value.length === 8) {
    axios
      .get(`https://viacep.com.br/ws/${inputValue.value}/json/`)
      .then((res) => store.commit("SET_CEP", res.data))
      .catch(() => store.commit("RESET_FORM"));
  }
}
</script>

<template>
  <b-form-group
    class="input"
    :id="`fieldset-${name}`"
    :label="label"
    label-for="input-1"
    :state="state"
  >
    <b-form-input
      :type="type"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      v-model="inputValue"
      :state="errorMessage && !errorMessage"
      trim
      :disabled="disabled"
      @keyup="searchCep"
    ></b-form-input>
  </b-form-group>
</template>
