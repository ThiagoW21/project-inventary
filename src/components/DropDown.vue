<script setup>
import { useField } from "vee-validate";
import { toRef, watch } from "vue";

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
  options: {
    type: Array,
    required: true,
  },
  reset: {
    type: Boolean,
    required: true,
  },
});

const name = toRef(props, "name");
const reset = toRef(props, "reset");
const value = toRef(props, "value");

const { value: inputValue, errorMessage } = useField(name, undefined, {
  initialValue: props.value,
});

watch(value, () => {
  inputValue.value = value.value;
});

watch(reset, () => {
  inputValue.value = undefined;
});
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
      :options="options"
      :state="errorMessage && !errorMessage"
    ></b-form-select>
  </b-form-group>
</template>
<style scoped>
.form-select {
  height: 35px;
}
</style>
