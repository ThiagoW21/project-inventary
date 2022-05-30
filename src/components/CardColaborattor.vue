<script setup>
defineProps({
  email: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
  office: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["show-detail"]);
</script>
<template>
  <div class="card-colaborattor" @click="emit('show-detail')">
    <div class="img-container">
      <vue-gravatar :email="email" :size="50" />
    </div>
    <h1>{{ name }}</h1>
    <h4>{{ email }}</h4>
    <h1>{{ tel }}</h1>
    <h1 id="office">{{ office }}</h1>
  </div>
</template>
<style scoped>
#office {
  color: rgb(0, 106, 255);
}

img {
  width: 100%;
}

h1 {
  font-size: 100%;
}

.img-container {
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 50%;
  margin-bottom: 30px;
}

.brand-model-container {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.card-colaborattor {
  border-radius: 10px;
  height: 340px;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  justify-content: space-between;
}
</style>
