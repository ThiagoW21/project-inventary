<script setup>
import { useField } from "vee-validate";
import { toRef } from "vue";

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

const name = toRef(props, "name");

const { value: inputValue, errorMessage } = useField(name, undefined, {
  initialValue: props.value,
});
</script>

<template>
  <b-form-group
    :id="`fieldset-${name}`"
    :label="label"
    label-for="input-1"
    :invalid-feedback="errorMessage"
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
    ></b-form-input>
  </b-form-group>
</template>
