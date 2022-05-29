<script setup>
import { useField } from "vee-validate";
import { toRef, watch, computed } from "vue";
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
    ></b-form-input>
  </b-form-group>
</template>
