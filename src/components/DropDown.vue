<script setup>
import { useField } from "vee-validate";
import { computed, ref, toRef, watch } from "vue";
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

const areas = ref([
  "Notebook",
  "Computadores",
  "Periféricos",
  "Peças",
  "Escritório",
]);
</script>

<template>
  <b-form-group
    :id="`fieldset-${name}`"
    :label="label"
    label-for="input-1"
    :state="state"
  >
    <b-form-select
      :id="name"
      :name="name"
      v-model="inputValue"
      :options="areas"
      :state="errorMessage && !errorMessage"
    ></b-form-select>
  </b-form-group>
</template>
<style scoped>
.form-select {
  height: 35px;
}
</style>
