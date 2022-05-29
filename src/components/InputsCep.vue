<script setup>
import { useField } from "vee-validate";
import { computed, toRef, watch } from "vue";
import { useStore } from "vuex";

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
});

const store = useStore();
const name = toRef(props, "name");
const value = toRef(props, "value");
const reset = computed(() => store.getters.resetForm);

const { value: inputValue } = useField(name, undefined, {
  initialValue: props.value,
});

watch(reset, () => {
  value.value = "";
});

watch(value, () => {
  inputValue.value = value.value;
});
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
      type="text"
      :name="name"
      v-model="inputValue"
      trim
      disabled
    ></b-form-input>
  </b-form-group>
</template>
