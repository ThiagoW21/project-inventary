<script setup>
defineProps({
  url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  borrowed_to: {
    type: Boolean,
    required: true,
  },
});
</script>
<template>
  <div class="card">
    <img :src="url" />
    <h3>{{ description }}</h3>
    <div class="brand-model-container">
      <p>{{ brand }}</p>
      <h1>{{ model }}</h1>
    </div>
    <div class="status" :class="{ borrowed: borrowed_to !== 'Na empresa' }">
      {{ borrowed_to }}
    </div>
  </div>
</template>
<style>
.brand-model-container {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}
</style>
