<script setup>
import Dropdown from "primevue/dropdown";
import { useStore } from "vuex";
import { computed, ref } from "vue";
import axios from "axios";

const store = useStore();

defineProps({
  borrowed: {
    type: String,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
  item: {
    type: String,
    required: true,
  },
});

const selected = ref();
const loading = ref(false);

async function handleChange(item) {
  item.borrowed_to = selected;
  const url = `https://inventary-v1.herokuapp.com/items/${item.id}`;
  loading.value = true;
  await axios.put(url, item);
  loading.value = false;
}

const options = computed(() => store.getters.contribuitorsName);
</script>
<template>
  <Dropdown
    v-model="selected"
    :options="options"
    :placeholder="borrowed"
    @change="handleChange(item)"
    :loading="loading"
  />
</template>
