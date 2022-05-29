<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  url: {
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

const emit = defineEmits(["show-detail"]);
</script>
<template>
  <div class="card" @click="emit('show-detail')">
    <img :src="url" />
    <h3>{{ title }}</h3>
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
.status {
  border-radius: 4px;
  background-color: #46b968;
  height: 30px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.brand-model-container {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.borrowed {
  background-color: #f9a825;
}

.card img {
  height: 50%;
  width: 100%;
}
</style>
