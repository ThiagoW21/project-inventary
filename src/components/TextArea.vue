<script setup>
import { useField } from "vee-validate";
import { toRef, watch } from "vue";

const props = defineProps({
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
  reset: {
    type: String,
    required: true,
  },
});

const name = toRef(props, "name");
const reset = toRef(props, "reset");
const value = toRef(props, "value");

const { value: inputValue, errorMessage } = useField(name, undefined, {
  initialValue: props.value,
});

watch(reset, () => {
  inputValue.value = "";
});

watch(value, () => {
  inputValue.value = value.value;
});
</script>

<template>
  <b-form-group
    :id="`fieldset-${name}`"
    :label="label"
    label-for="input-1"
    :state="state"
  >
    <b-form-textarea
      :id="name"
      :name="name"
      :placeholder="placeholder"
      v-model="inputValue"
      :state="errorMessage && !errorMessage"
      size="lg"
      trim
    ></b-form-textarea>
  </b-form-group>
</template>
